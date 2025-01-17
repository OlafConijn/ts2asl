import { writeFileSync, readFileSync } from "fs";
import { createCompilerHostFromFile, createCompilerHostFromSource } from "../compiler-host/node";
import { ConvertedStateMachineWithDiagnostics, Converter } from "../convert";
import {SFN} from "@aws-sdk/client-sfn";
import * as asl from "@ts2asl/asl-lib";

export const runConvertForTest = (filename: string): Record<string, ConvertedStateMachineWithDiagnostics> => {
  const host = createCompilerHostFromFile(`src/__test__/resources/${filename}.ts`);
  const converter = new Converter(host);
  const converted = converter
    .convert({ includeDiagnostics: true, skipVersionComment: true, getParameter: x => x as any })
    .stateMachines.map(x => x as ConvertedStateMachineWithDiagnostics);

  for (const stateMachine of converted) {
    writeFileSync(
      `src/__test__/output/ts-lib/${filename}-${stateMachine.name}.ts`,
      stateMachine.transformedCode ?? ""
    );
    writeFileSync(
      `src/__test__/output/iasl/${filename}-${stateMachine.name}.json`,
      JSON.stringify(stateMachine.iasl, function (this: any, key: string, val: any) { return key === "parentScope" ? undefined : val; }, 2) ?? ""
    );
    writeFileSync(
      `src/__test__/output/asl/${filename}-${stateMachine.name}.json`,
      JSON.stringify(stateMachine.asl, null, 2) ?? ""
    );
  }

  let result: Record<string, ConvertedStateMachineWithDiagnostics> = {};
  for (const c of converted) {
    result[c.name] = c;
  }

  return result;
};

export const convertDeployExecute = async (filename: string, name: string, input: {} = {}): Promise<unknown> => {
  return await retryWhenTrottled(async ()=> {
    asl.clientConfig.region = "us-east-1";
    const source = readFileSync(`src/__test__/resources/${filename}.ts`).toString("utf-8");
    const host = createCompilerHostFromSource(source);
    
    const converter = new Converter(host);
    const converted = converter
      .convert({ includeDiagnostics: true, getParameter: x => x as any })
      .stateMachines.map(x => x as ConvertedStateMachineWithDiagnostics);
    const stateMachineName = `ts2asl` + Math.floor(Math.random() * 99999999);
    let sfnArn: string = "";
    try {
      for (const stateMachine of converted) {
        if (stateMachine.name !== name) continue;
        const aslString = JSON.stringify(stateMachine.asl);

        const response = await asl.sdk(SFN).createStateMachine({ parameters: { name: stateMachineName, type: "EXPRESS", definition: aslString, roleArn: "arn:aws:iam::642712255693:role/ts2asl-test" } });
        
        let result: any | undefined = undefined;
        let retryCount = 0;
        do {
          try{
            result = await asl.sdk(SFN).startSyncExecution({ parameters: { stateMachineArn: response.stateMachineArn, input: JSON.stringify(input, null, 2) } });
            if (result.output === undefined) return undefined;
          } catch(err) {
            if ((retryCount++) > 2) throw err;
            const sdkError = err as {name:string};
            
            //retry if sm didnt exist
            if (sdkError.name !== "StateMachineDoesNotExist") throw err;
            await sleep(1000);
          }
        }while(result === undefined);

        await asl.sdk(SFN).deleteStateMachine({ parameters: {stateMachineArn: response.stateMachineArn}});
        return JSON.parse(result.output as string);
      }
    }
    catch (err) {
      console.log(err);
      throw err;
    }
    finally {
      if (sfnArn) await asl.sdk(SFN).deleteStateMachine({ parameters: { stateMachineArn: sfnArn } });
    }
  });
};


const retryWhenTrottled = async<T>(fn: ()=>Promise<T>) => {
  let retry = false;
  do {
    try{
      retry = false;
      return await fn();
    } catch(err) {
      if ((err as {name: string}).name === "ThrottlingException") {
        sleep(1000);
        retry = true;
      } else {
        throw err;
      }
    }
  } while(retry === true)
}

const sleep = async (millis: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, millis);
  });
};
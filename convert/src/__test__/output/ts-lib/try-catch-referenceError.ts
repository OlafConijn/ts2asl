
import * as asl from "@ts2asl/asl-lib"

export const lambda = asl.deploy.asLambda(() => { return ["succeeded"] });

export const simpleTry = asl.deploy.asStateMachine(async () => {
  let result = "";
  try {
    result = "succeeded";
    throw new Error("fail");
  } catch {
    result = "failed";
  }
  return result;
});

export const referenceError = asl.deploy.asStateMachine(async () =>{
    let result = asl.pass({
        name: "Assign result",
        parameters: () => "",
        comment: "result = \"\""
    });
    asl.typescriptTry({
        name: "Try Catch",
        try: async () => {
            result = "succeeded";
            asl.fail({
                name: "Throw Error",
                error: "Error",
                cause: "fail",
                comment: "throw new Error(\"fail\");"
            })
        },
        catch: [
            {
                errorEquals: [
                    "States.ALL"
                ],
                block: err => {
                    result = asl.states.format("failed {} ({})", err.Error, err.Cause);
                }
            }
        ]
    })
    return result;
});


export const simpleMultipleStatements = asl.deploy.asStateMachine(async () => {
  try {
    const arr = [1]
    const withinTry = arr.map(x => "succeeded");
    return withinTry[0];
  } catch {
    return "it failed";
  }
});

export const tryAroundPassState = asl.deploy.asStateMachine(async () => {
  try {
    return "this cannot fail";
  } catch {
    return "this never happens";
  }
});

export const tryFinally = asl.deploy.asStateMachine(async () => {
  try {
    await Promise.all([() => "succeeded"]);
  } finally {
    return "finally";
  }
});

export const tryCatchFinally = asl.deploy.asStateMachine(async () => {
  let result = "";
  try {
    result = "try"
  } catch {
    result = "catch"
  } finally {
    result = "finally"
  }
  return result;
});

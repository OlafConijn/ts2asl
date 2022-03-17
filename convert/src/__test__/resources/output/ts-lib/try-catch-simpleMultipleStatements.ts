
import * as asl from "@ts2asl/asl-lib"

export const lambda = asl.deploy.asLambda(() => { return [""] });

export const simpleTry = asl.deploy.asStateMachine(async () => {
  try {
    const withoutTryCatch = lambda();
  } catch {
    console.log("it failed")
  }
});
export const simpleMultipleStatements = asl.deploy.asStateMachine(async () =>{
    asl.typescriptTry({
        name: "Try Catch",
        try: async () => {
            const withoutTryCatch = asl.typescriptInvoke({
                name: "lambda()",
                resource: lambda,
                comment: "lambda()"
            });
            asl.pass({
                parameters: () => "it succeeded",
                comment: "console.log(\"it succeeded\")"
            });
        },
        catch: [
            {
                errorFilter: [
                    "States.All"
                ],
                block: () => {
                    asl.pass({
                        parameters: () => "it failed",
                        comment: "console.log(\"it failed\")"
                    });
                }
            }
        ],
        comment: "try {\n    const withoutTryCatch = lambda();\n    console.log(\"it succeeded\");\n  } catch {\n    console.log(\"it failed\");\n  }"
    })
});
export const tryAroundPassState = asl.deploy.asStateMachine(async () => {
  try {
    console.log("this cannot fail");
  } catch {
    console.log("this never happens");
  }
});
export const tryFinally = asl.deploy.asStateMachine(async () => {
  try {
    lambda();
  } finally {
    console.log("finally")
  }
});
export const tryCatchFinally = asl.deploy.asStateMachine(async () => {
  try {
    lambda();
  } catch {
    console.log("failed")
  } finally {
    console.log("finally")
  }
});

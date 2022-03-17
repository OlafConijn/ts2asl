import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting typescript invoke to iasl", () => {
  it("then native integrations get converted to task states", () => {
    const code = `
    import * as asl from 'asl-lib';
  
    asl.typescriptInvoke({
      resource: SayHello,
      parameters: () => arg.xxx,
      comment: "SayHello(arg.xxx)"
  });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "asl-task-state",
            "parameters": Object {
              "_syntaxKind": "identifier",
              "identifier": "arg.xxx",
              "type": "unknown",
            },
            "resource": "lambda:SayHello",
            "source": "SayHello(arg.xxx)",
            "stateName": "Invoke SayHello",
          },
        ],
      }
    `);
  });
});

import * as asl from "@ts2asl/asl-lib"

export const literals = asl.deploy.asStateMachine(async () => {
  let str = "string";
  let num = 42;
  let bool = true || false;
  let object = { str, num, bool };
  let object2 = { str: "string", num: 33, inner: object };
  let arrayOfNumbers = [1, 2, 3, 4, 5];
  let arrayOfObjects = [{ left: 1, right: 2 }, { left: 3, right: 4 }, { left: 5, right: 6 }];
  return { arrayOfNumbers, arrayOfObjects, object2 };
});

export const arrayWithIdentifiers = asl.deploy.asStateMachine(async () => {
  let str = "string";
  let num = 42;
  let bool = true || false;
  let object = { str, num, bool };
  let array = [str, num, bool, object];
  return array;
});

export const unassignedVariable = asl.deploy.asStateMachine(async () =>{
    let arr: [
    ] = asl.pass({
        name: "Assign arr",
        comment: "arr: []"
    });
    let two: string = asl.pass({
        name: "Assign two",
        comment: "two: string"
    });
    let _null = asl.pass({
        name: "Assign _null",
        parameters: () => null,
        comment: "_null = null"
    });
    let _undefined = asl.pass({
        name: "Assign _undefined",
        parameters: () => undefined,
        comment: "_undefined = undefined"
    });
    return two;
});

export const arrayIndexer = asl.deploy.asStateMachine(async () => {
  let arr = [1, 2, 3, 4, 5]
  let two = arr[1];
  return two;
});

export const functions = asl.deploy.asStateMachine(async () => {
  let str = asl.states.format("hello {}", "world")
  let num = asl.states.format("answer is {}", 42);
  let combined = asl.states.format("1: {}\n 2: {}", str, num);
  let arr = asl.states.array(str, num, combined);
  return arr;
});

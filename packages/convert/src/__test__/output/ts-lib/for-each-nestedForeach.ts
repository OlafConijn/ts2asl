import * as asl from "@ts2asl/asl-lib"

export const simpleForeach = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (result === "") { //first element should not be prefixed with a comma
      result = asl.convert.numberToString(item);
    } else {
      result = `${result}, ${item}`;
    }
  }
  return result;
});

export const foreachWithBreak = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (result === "") { //first element should not be prefixed with a comma
      result = asl.convert.numberToString(item);
    } else {
      result = `${result}, ${item}`;
    }
    if (item === 2) {
      break; // this break will prevent 3 from being added to the string
    }
  }
  return result;
});

export const foreachWithContinue = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";
  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (item === 2) {
      continue; // this break will prevent 2 from being added to the string
    }
    if (result === "") { //first element should not be prefixed with a comma
      result = asl.convert.numberToString(item);
    } else {
      result = `${result}, ${item}`;
    }
  }
  return result; //returns "1, 3"
});


export const foreachEarlyReturn = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  for (const item of arr) {
    if (item === 2) {
      return `found ${item}!`; //returns "found 2!"
    }
  }
  throw new Error("should not get here");
});



export const nestedForeach = asl.deploy.asStateMachine(async () =>{
    const numbers = asl.pass({
        name: "Assign numbers",
        parameters: () => [0, 1, 2, 3],
        comment: "numbers = [0, 1, 2, 3]"
    });
    const letters = asl.pass({
        name: "Assign letters",
        parameters: () => ["a", "b", "c", "d"],
        comment: "letters = [\"a\", \"b\", \"c\", \"d\"]"
    });
    const global = asl.pass({
        name: "Assign global",
        parameters: () => "prefix",
        comment: "global = \"prefix\""
    });
    const outer = asl.pass({
        name: "Assign outer",
        parameters: () => ({ middle: { inner: 3 } }),
        comment: "outer = { middle: { inner: 3 } }"
    });
    asl.typescriptForeach({
        name: "For number Of numbers",
        items: () => numbers,
        iterator: number => {
            asl.typescriptForeach({
                name: "For letter Of letters",
                items: () => letters,
                iterator: letter => {
                    const combined = asl.pass({
                        name: "Assign combined",
                        parameters: () => ({ number, letter, global, inner: outer.middle.inner }),
                        comment: "combined = { number, letter, global, inner: outer.middle.inner }"
                    });
                    asl.pass({
                        name: "Log (combined)",
                        parameters: () => combined,
                        comment: "console.log(combined)"
                    });
                }
            })
            ;
        }
    })
    ;
});

export const emptyForeach = asl.deploy.asStateMachine(async () => {
  const numbers = [0, 1, 2, 3];
  for (const _number of numbers) {

  };
  return "ok"
});
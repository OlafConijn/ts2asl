
import { internalWaitSeconds } from './asl-internals';
import util from 'util';

export interface AslResource { }
export interface AslStateMachine extends AslResource { }
export interface AslLambdaFunction extends AslResource { }
export interface AslState { }

export type While = {
  condition: () => boolean;
  block: Function;
  name?: string;
};
export type DoWhile = {
  condition: () => boolean;
  block: Function;
  name?: string;
};
export type If = {
  condition: boolean | (() => boolean),
  then: Function;
  else?: Function;
  comment?: string;
  name?: string;
};
export declare type CatchConfiguration = Array<{
  errorFilter: string[];
  block: Function;
}>;
export declare type RetryConfiguration = Array<{
  errorFilter: string[];
  intervalSeconds?: number;
  maxAttempts?: number;
  backoffRate?: number;
}>
export interface Wait {
  seconds?: number | (() => number);
  timestamp?: string | (() => string);
  comment?: string;
  name?: string;
}

export interface Try {
  try: Function;
  catch?: CatchConfiguration;
  finally?: Function;
  comment?: string;
  name?: string;
}
export interface Task {
  name?: string;
  resource: string;
  parameters?: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  timeoutSeconds?: number;
  heartbeatSeconds?: number;
}
export interface SdkIntegrationTask<TInput> {
  name?: string;
  parameters: TInput;
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  timeoutSeconds?: number;
  heartbeatSeconds?: number;
}

export interface Pass<T> {
  parameters: T | (() => T) | (<U>(objectContext: StateMachineContext<U>) => T);
  comment?: string;
  name?: string;
}
export interface Fail {
  error?: string;
  cause?: string;
  comment?: string;
  name?: string;
}

export interface Map<T, O> {
  parameters?: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
  items: T[] | undefined | (() => T[]);
  iterator: <U>(item: T, objectContext: StateMachineContext<U>) => O;
  maxConcurrency?: number;
  comment?: string;
  name?: string;
}

export interface Succeed {
  comment?: string;
  name?: string;
}

export interface Parallel<T> {
  branches: (() => void | {})[],
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  comment?: string;
  name?: string;
}

export type TypescriptInvoke<P, R> = {
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  timeoutSeconds?: number;
  heartbeatSeconds?: number;
  comment?: string;
  name?: string;
} & ({
  resource: ((parameters: P) => Promise<R>) | ((parameters: P) => R);
  parameters: P | (() => P);
} | {
  resource: () => (R | Promise<R>)
})

export interface Choice {
  // input?: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
  choices: Array<{ condition: () => boolean; block: Function }>;
  default?: boolean | (() => boolean);
  comment?: string;
  name?: string;
}


export interface StateMachineContext<TInput> {
  readonly execution: {
    readonly id: string;
    readonly input: TInput;
    readonly name: string;
    readonly roleArn: string;
    readonly startTime: string;
  };
  readonly stateMachine: {
    readonly id: string;
    readonly name: string;
  };
  readonly state: {
    readonly name: string;
    readonly enteredTime: string;
  };
}

export const typescriptInvoke = async <P, R>(args: TypescriptInvoke<P, R>): Promise<R> => {
  if ("parameters" in args) {
    return args.resource(args.parameters as P);
  } else {
    return args.resource();
  }
}

export const typescriptTry = async (args: Try) => {
  return {} as AslState;
}

export const typescriptDoWhile = async (args: DoWhile) => {
  do {
    args.block();
  } while (typeof args.condition === "function" ? args.condition() : args)
  return {} as AslState;
}

export const typescriptWhile = async (args: While) => {
  while (typeof args.condition === "function" ? args.condition() : args) {
    args.block();
  }
  return {} as AslState;
}

export const typescriptIf = async (args: If) => {
  return {} as AslState;
}

export const task = async <TResult>(args: Task): Promise<TResult> => {
  return Promise.resolve({} as TResult);
}

export const wait = async (args: Wait) => {
  await internalWaitSeconds(args.seconds as number);
}

export const parallel = async <Item>(args: Parallel<Item>) => {
  return {} as AslState;
}

export const choice = async (args: Choice) => {
  return {} as AslState;
}

export const map = async <Input, Output>(args: Map<Input, Output>) => {
  return {} as Output[];
}

export const pass = <T>(args: Pass<T>): T => {
  return args.parameters as T;
}

export const succeed = (x: Succeed) => {
  return {} as AslState;
}

export const fail = (x: Fail): never => {
  throw new Error(x.cause);
}

export const jsonPathLength = <T>(items: T[]): number => {
  return items.length;
}
export const jsonPathFilter = <T>(items: T[], predicate: (x: T) => boolean): T[] => {
  return items.filter(predicate);
}

export const jsonPathSlice = <T>(items: T[], start: number, end?: number, step?: number): T[] => {
  return items;
}

export const jsonPathExpression = (items: unknown, expression: string): unknown => {
  return items;
}

export namespace states {
  export function format(format: string, ...args: unknown[]): string {
    const formatNode = format.replace(/{}/g, '%s')
    return util.format(formatNode, ...args);
  }

  export function stringToJson(arg: string | undefined): unknown {
    if (arg === undefined) return undefined;
    return JSON.parse(arg);
  }
  export function jsonToString(arg: unknown): string {
    switch (typeof arg) {
      case "number":
      case "boolean":
      case "string":
        arg.toString();
        break;
    }
    return JSON.stringify(arg);
  }
  export function array(...args: unknown[]): unknown[] {
    return args;
  }
}

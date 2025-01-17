import * as asl from '@ts2asl/asl-lib';
import { SNS } from "@aws-sdk/client-sns";
import * as SdkSNS from "@aws-sdk/client-sns";
import { lambdaImplementation } from './lambda';
const num = asl.deploy.evalConst(23);
const str = asl.deploy.evalConst("");
const statemachine = asl.deploy.asStateMachine(async (arg: {}) => "hello");
const lambda = asl.deploy.asLambda(lambdaImplementation);
const statusCode = (await asl.optimized.lambdaInvoke({parameters: {FunctionName:"asdas"}})).StatusCode;
const messageId = (await asl.sdk(SNS).publish({parameters: {} as any})).MessageId!;
const result = (await lambda({ num, str })).num;
const aliasedImport = SdkSNS;
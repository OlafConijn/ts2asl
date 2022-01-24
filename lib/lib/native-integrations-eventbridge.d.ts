import { ActivateEventSourceCommandInput, ActivateEventSourceCommandOutput } from "@aws-sdk/client-eventbridge";
import { CancelReplayCommandInput, CancelReplayCommandOutput } from "@aws-sdk/client-eventbridge";
import { CreateApiDestinationCommandInput, CreateApiDestinationCommandOutput } from "@aws-sdk/client-eventbridge";
import { CreateArchiveCommandInput, CreateArchiveCommandOutput } from "@aws-sdk/client-eventbridge";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "@aws-sdk/client-eventbridge";
import { CreateEventBusCommandInput, CreateEventBusCommandOutput } from "@aws-sdk/client-eventbridge";
import { CreatePartnerEventSourceCommandInput, CreatePartnerEventSourceCommandOutput } from "@aws-sdk/client-eventbridge";
import { DeactivateEventSourceCommandInput, DeactivateEventSourceCommandOutput } from "@aws-sdk/client-eventbridge";
import { DeauthorizeConnectionCommandInput, DeauthorizeConnectionCommandOutput } from "@aws-sdk/client-eventbridge";
import { DeleteApiDestinationCommandInput, DeleteApiDestinationCommandOutput } from "@aws-sdk/client-eventbridge";
import { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "@aws-sdk/client-eventbridge";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "@aws-sdk/client-eventbridge";
import { DeleteEventBusCommandInput, DeleteEventBusCommandOutput } from "@aws-sdk/client-eventbridge";
import { DeletePartnerEventSourceCommandInput, DeletePartnerEventSourceCommandOutput } from "@aws-sdk/client-eventbridge";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "@aws-sdk/client-eventbridge";
import { DescribeApiDestinationCommandInput, DescribeApiDestinationCommandOutput } from "@aws-sdk/client-eventbridge";
import { DescribeArchiveCommandInput, DescribeArchiveCommandOutput } from "@aws-sdk/client-eventbridge";
import { DescribeConnectionCommandInput, DescribeConnectionCommandOutput } from "@aws-sdk/client-eventbridge";
import { DescribeEventBusCommandInput, DescribeEventBusCommandOutput } from "@aws-sdk/client-eventbridge";
import { DescribeEventSourceCommandInput, DescribeEventSourceCommandOutput } from "@aws-sdk/client-eventbridge";
import { DescribePartnerEventSourceCommandInput, DescribePartnerEventSourceCommandOutput } from "@aws-sdk/client-eventbridge";
import { DescribeReplayCommandInput, DescribeReplayCommandOutput } from "@aws-sdk/client-eventbridge";
import { DescribeRuleCommandInput, DescribeRuleCommandOutput } from "@aws-sdk/client-eventbridge";
import { DisableRuleCommandInput, DisableRuleCommandOutput } from "@aws-sdk/client-eventbridge";
import { EnableRuleCommandInput, EnableRuleCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListApiDestinationsCommandInput, ListApiDestinationsCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListArchivesCommandInput, ListArchivesCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListEventBusesCommandInput, ListEventBusesCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListEventSourcesCommandInput, ListEventSourcesCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListPartnerEventSourceAccountsCommandInput, ListPartnerEventSourceAccountsCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListPartnerEventSourcesCommandInput, ListPartnerEventSourcesCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListReplaysCommandInput, ListReplaysCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListRuleNamesByTargetCommandInput, ListRuleNamesByTargetCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListRulesCommandInput, ListRulesCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "@aws-sdk/client-eventbridge";
import { ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput } from "@aws-sdk/client-eventbridge";
import { PutEventsCommandInput, PutEventsCommandOutput } from "@aws-sdk/client-eventbridge";
import { PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput } from "@aws-sdk/client-eventbridge";
import { PutPermissionCommandInput, PutPermissionCommandOutput } from "@aws-sdk/client-eventbridge";
import { PutRuleCommandInput, PutRuleCommandOutput } from "@aws-sdk/client-eventbridge";
import { PutTargetsCommandInput, PutTargetsCommandOutput } from "@aws-sdk/client-eventbridge";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "@aws-sdk/client-eventbridge";
import { RemoveTargetsCommandInput, RemoveTargetsCommandOutput } from "@aws-sdk/client-eventbridge";
import { StartReplayCommandInput, StartReplayCommandOutput } from "@aws-sdk/client-eventbridge";
import { TagResourceCommandInput, TagResourceCommandOutput } from "@aws-sdk/client-eventbridge";
import { TestEventPatternCommandInput, TestEventPatternCommandOutput } from "@aws-sdk/client-eventbridge";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "@aws-sdk/client-eventbridge";
import { UpdateApiDestinationCommandInput, UpdateApiDestinationCommandOutput } from "@aws-sdk/client-eventbridge";
import { UpdateArchiveCommandInput, UpdateArchiveCommandOutput } from "@aws-sdk/client-eventbridge";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "@aws-sdk/client-eventbridge";
export declare namespace ASL {
    const nativeEventBridgeActivateEventSource: (input: ActivateEventSourceCommandInput) => Promise<ActivateEventSourceCommandOutput>;
    const nativeEventBridgeCancelReplay: (input: CancelReplayCommandInput) => Promise<CancelReplayCommandOutput>;
    const nativeEventBridgeCreateApiDestination: (input: CreateApiDestinationCommandInput) => Promise<CreateApiDestinationCommandOutput>;
    const nativeEventBridgeCreateArchive: (input: CreateArchiveCommandInput) => Promise<CreateArchiveCommandOutput>;
    const nativeEventBridgeCreateConnection: (input: CreateConnectionCommandInput) => Promise<CreateConnectionCommandOutput>;
    const nativeEventBridgeCreateEventBus: (input: CreateEventBusCommandInput) => Promise<CreateEventBusCommandOutput>;
    const nativeEventBridgeCreatePartnerEventSource: (input: CreatePartnerEventSourceCommandInput) => Promise<CreatePartnerEventSourceCommandOutput>;
    const nativeEventBridgeDeactivateEventSource: (input: DeactivateEventSourceCommandInput) => Promise<DeactivateEventSourceCommandOutput>;
    const nativeEventBridgeDeauthorizeConnection: (input: DeauthorizeConnectionCommandInput) => Promise<DeauthorizeConnectionCommandOutput>;
    const nativeEventBridgeDeleteApiDestination: (input: DeleteApiDestinationCommandInput) => Promise<DeleteApiDestinationCommandOutput>;
    const nativeEventBridgeDeleteArchive: (input: DeleteArchiveCommandInput) => Promise<DeleteArchiveCommandOutput>;
    const nativeEventBridgeDeleteConnection: (input: DeleteConnectionCommandInput) => Promise<DeleteConnectionCommandOutput>;
    const nativeEventBridgeDeleteEventBus: (input: DeleteEventBusCommandInput) => Promise<DeleteEventBusCommandOutput>;
    const nativeEventBridgeDeletePartnerEventSource: (input: DeletePartnerEventSourceCommandInput) => Promise<DeletePartnerEventSourceCommandOutput>;
    const nativeEventBridgeDeleteRule: (input: DeleteRuleCommandInput) => Promise<DeleteRuleCommandOutput>;
    const nativeEventBridgeDescribeApiDestination: (input: DescribeApiDestinationCommandInput) => Promise<DescribeApiDestinationCommandOutput>;
    const nativeEventBridgeDescribeArchive: (input: DescribeArchiveCommandInput) => Promise<DescribeArchiveCommandOutput>;
    const nativeEventBridgeDescribeConnection: (input: DescribeConnectionCommandInput) => Promise<DescribeConnectionCommandOutput>;
    const nativeEventBridgeDescribeEventBus: (input: DescribeEventBusCommandInput) => Promise<DescribeEventBusCommandOutput>;
    const nativeEventBridgeDescribeEventSource: (input: DescribeEventSourceCommandInput) => Promise<DescribeEventSourceCommandOutput>;
    const nativeEventBridgeDescribePartnerEventSource: (input: DescribePartnerEventSourceCommandInput) => Promise<DescribePartnerEventSourceCommandOutput>;
    const nativeEventBridgeDescribeReplay: (input: DescribeReplayCommandInput) => Promise<DescribeReplayCommandOutput>;
    const nativeEventBridgeDescribeRule: (input: DescribeRuleCommandInput) => Promise<DescribeRuleCommandOutput>;
    const nativeEventBridgeDisableRule: (input: DisableRuleCommandInput) => Promise<DisableRuleCommandOutput>;
    const nativeEventBridgeEnableRule: (input: EnableRuleCommandInput) => Promise<EnableRuleCommandOutput>;
    const nativeEventBridgeListApiDestinations: (input: ListApiDestinationsCommandInput) => Promise<ListApiDestinationsCommandOutput>;
    const nativeEventBridgeListArchives: (input: ListArchivesCommandInput) => Promise<ListArchivesCommandOutput>;
    const nativeEventBridgeListConnections: (input: ListConnectionsCommandInput) => Promise<ListConnectionsCommandOutput>;
    const nativeEventBridgeListEventBuses: (input: ListEventBusesCommandInput) => Promise<ListEventBusesCommandOutput>;
    const nativeEventBridgeListEventSources: (input: ListEventSourcesCommandInput) => Promise<ListEventSourcesCommandOutput>;
    const nativeEventBridgeListPartnerEventSourceAccounts: (input: ListPartnerEventSourceAccountsCommandInput) => Promise<ListPartnerEventSourceAccountsCommandOutput>;
    const nativeEventBridgeListPartnerEventSources: (input: ListPartnerEventSourcesCommandInput) => Promise<ListPartnerEventSourcesCommandOutput>;
    const nativeEventBridgeListReplays: (input: ListReplaysCommandInput) => Promise<ListReplaysCommandOutput>;
    const nativeEventBridgeListRuleNamesByTarget: (input: ListRuleNamesByTargetCommandInput) => Promise<ListRuleNamesByTargetCommandOutput>;
    const nativeEventBridgeListRules: (input: ListRulesCommandInput) => Promise<ListRulesCommandOutput>;
    const nativeEventBridgeListTagsForResource: (input: ListTagsForResourceCommandInput) => Promise<ListTagsForResourceCommandOutput>;
    const nativeEventBridgeListTargetsByRule: (input: ListTargetsByRuleCommandInput) => Promise<ListTargetsByRuleCommandOutput>;
    const nativeEventBridgePutEvents: (input: PutEventsCommandInput) => Promise<PutEventsCommandOutput>;
    const nativeEventBridgePutPartnerEvents: (input: PutPartnerEventsCommandInput) => Promise<PutPartnerEventsCommandOutput>;
    const nativeEventBridgePutPermission: (input: PutPermissionCommandInput) => Promise<PutPermissionCommandOutput>;
    const nativeEventBridgePutRule: (input: PutRuleCommandInput) => Promise<PutRuleCommandOutput>;
    const nativeEventBridgePutTargets: (input: PutTargetsCommandInput) => Promise<PutTargetsCommandOutput>;
    const nativeEventBridgeRemovePermission: (input: RemovePermissionCommandInput) => Promise<RemovePermissionCommandOutput>;
    const nativeEventBridgeRemoveTargets: (input: RemoveTargetsCommandInput) => Promise<RemoveTargetsCommandOutput>;
    const nativeEventBridgeStartReplay: (input: StartReplayCommandInput) => Promise<StartReplayCommandOutput>;
    const nativeEventBridgeTagResource: (input: TagResourceCommandInput) => Promise<TagResourceCommandOutput>;
    const nativeEventBridgeTestEventPattern: (input: TestEventPatternCommandInput) => Promise<TestEventPatternCommandOutput>;
    const nativeEventBridgeUntagResource: (input: UntagResourceCommandInput) => Promise<UntagResourceCommandOutput>;
    const nativeEventBridgeUpdateApiDestination: (input: UpdateApiDestinationCommandInput) => Promise<UpdateApiDestinationCommandOutput>;
    const nativeEventBridgeUpdateArchive: (input: UpdateArchiveCommandInput) => Promise<UpdateArchiveCommandOutput>;
    const nativeEventBridgeUpdateConnection: (input: UpdateConnectionCommandInput) => Promise<UpdateConnectionCommandOutput>;
}
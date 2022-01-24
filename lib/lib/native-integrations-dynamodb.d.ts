import { BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput } from "@aws-sdk/client-dynamodb";
import { BatchGetItemCommandInput, BatchGetItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { BatchWriteItemCommandInput, BatchWriteItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { CreateBackupCommandInput, CreateBackupCommandOutput } from "@aws-sdk/client-dynamodb";
import { CreateGlobalTableCommandInput, CreateGlobalTableCommandOutput } from "@aws-sdk/client-dynamodb";
import { CreateTableCommandInput, CreateTableCommandOutput } from "@aws-sdk/client-dynamodb";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "@aws-sdk/client-dynamodb";
import { DeleteItemCommandInput, DeleteItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeBackupCommandInput, DescribeBackupCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeContinuousBackupsCommandInput, DescribeContinuousBackupsCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeContributorInsightsCommandInput, DescribeContributorInsightsCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeExportCommandInput, DescribeExportCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeGlobalTableCommandInput, DescribeGlobalTableCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeGlobalTableSettingsCommandInput, DescribeGlobalTableSettingsCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeKinesisStreamingDestinationCommandInput, DescribeKinesisStreamingDestinationCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeLimitsCommandInput, DescribeLimitsCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeTableCommandInput, DescribeTableCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeTableReplicaAutoScalingCommandInput, DescribeTableReplicaAutoScalingCommandOutput } from "@aws-sdk/client-dynamodb";
import { DescribeTimeToLiveCommandInput, DescribeTimeToLiveCommandOutput } from "@aws-sdk/client-dynamodb";
import { DisableKinesisStreamingDestinationCommandInput, DisableKinesisStreamingDestinationCommandOutput } from "@aws-sdk/client-dynamodb";
import { EnableKinesisStreamingDestinationCommandInput, EnableKinesisStreamingDestinationCommandOutput } from "@aws-sdk/client-dynamodb";
import { ExecuteStatementCommandInput, ExecuteStatementCommandOutput } from "@aws-sdk/client-dynamodb";
import { ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput } from "@aws-sdk/client-dynamodb";
import { ExportTableToPointInTimeCommandInput, ExportTableToPointInTimeCommandOutput } from "@aws-sdk/client-dynamodb";
import { GetItemCommandInput, GetItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { ListBackupsCommandInput, ListBackupsCommandOutput } from "@aws-sdk/client-dynamodb";
import { ListContributorInsightsCommandInput, ListContributorInsightsCommandOutput } from "@aws-sdk/client-dynamodb";
import { ListExportsCommandInput, ListExportsCommandOutput } from "@aws-sdk/client-dynamodb";
import { ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput } from "@aws-sdk/client-dynamodb";
import { ListTablesCommandInput, ListTablesCommandOutput } from "@aws-sdk/client-dynamodb";
import { ListTagsOfResourceCommandInput, ListTagsOfResourceCommandOutput } from "@aws-sdk/client-dynamodb";
import { PutItemCommandInput, PutItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { QueryCommandInput, QueryCommandOutput } from "@aws-sdk/client-dynamodb";
import { RestoreTableFromBackupCommandInput, RestoreTableFromBackupCommandOutput } from "@aws-sdk/client-dynamodb";
import { RestoreTableToPointInTimeCommandInput, RestoreTableToPointInTimeCommandOutput } from "@aws-sdk/client-dynamodb";
import { ScanCommandInput, ScanCommandOutput } from "@aws-sdk/client-dynamodb";
import { TagResourceCommandInput, TagResourceCommandOutput } from "@aws-sdk/client-dynamodb";
import { TransactGetItemsCommandInput, TransactGetItemsCommandOutput } from "@aws-sdk/client-dynamodb";
import { TransactWriteItemsCommandInput, TransactWriteItemsCommandOutput } from "@aws-sdk/client-dynamodb";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "@aws-sdk/client-dynamodb";
import { UpdateContinuousBackupsCommandInput, UpdateContinuousBackupsCommandOutput } from "@aws-sdk/client-dynamodb";
import { UpdateContributorInsightsCommandInput, UpdateContributorInsightsCommandOutput } from "@aws-sdk/client-dynamodb";
import { UpdateGlobalTableCommandInput, UpdateGlobalTableCommandOutput } from "@aws-sdk/client-dynamodb";
import { UpdateGlobalTableSettingsCommandInput, UpdateGlobalTableSettingsCommandOutput } from "@aws-sdk/client-dynamodb";
import { UpdateItemCommandInput, UpdateItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "@aws-sdk/client-dynamodb";
import { UpdateTableReplicaAutoScalingCommandInput, UpdateTableReplicaAutoScalingCommandOutput } from "@aws-sdk/client-dynamodb";
import { UpdateTimeToLiveCommandInput, UpdateTimeToLiveCommandOutput } from "@aws-sdk/client-dynamodb";
export declare namespace ASL {
    const nativeDynamoDBBatchExecuteStatement: (input: BatchExecuteStatementCommandInput) => Promise<BatchExecuteStatementCommandOutput>;
    const nativeDynamoDBBatchGetItem: (input: BatchGetItemCommandInput) => Promise<BatchGetItemCommandOutput>;
    const nativeDynamoDBBatchWriteItem: (input: BatchWriteItemCommandInput) => Promise<BatchWriteItemCommandOutput>;
    const nativeDynamoDBCreateBackup: (input: CreateBackupCommandInput) => Promise<CreateBackupCommandOutput>;
    const nativeDynamoDBCreateGlobalTable: (input: CreateGlobalTableCommandInput) => Promise<CreateGlobalTableCommandOutput>;
    const nativeDynamoDBCreateTable: (input: CreateTableCommandInput) => Promise<CreateTableCommandOutput>;
    const nativeDynamoDBDeleteBackup: (input: DeleteBackupCommandInput) => Promise<DeleteBackupCommandOutput>;
    const nativeDynamoDBDeleteItem: (input: DeleteItemCommandInput) => Promise<DeleteItemCommandOutput>;
    const nativeDynamoDBDeleteTable: (input: DeleteTableCommandInput) => Promise<DeleteTableCommandOutput>;
    const nativeDynamoDBDescribeBackup: (input: DescribeBackupCommandInput) => Promise<DescribeBackupCommandOutput>;
    const nativeDynamoDBDescribeContinuousBackups: (input: DescribeContinuousBackupsCommandInput) => Promise<DescribeContinuousBackupsCommandOutput>;
    const nativeDynamoDBDescribeContributorInsights: (input: DescribeContributorInsightsCommandInput) => Promise<DescribeContributorInsightsCommandOutput>;
    const nativeDynamoDBDescribeEndpoints: (input: DescribeEndpointsCommandInput) => Promise<DescribeEndpointsCommandOutput>;
    const nativeDynamoDBDescribeExport: (input: DescribeExportCommandInput) => Promise<DescribeExportCommandOutput>;
    const nativeDynamoDBDescribeGlobalTable: (input: DescribeGlobalTableCommandInput) => Promise<DescribeGlobalTableCommandOutput>;
    const nativeDynamoDBDescribeGlobalTableSettings: (input: DescribeGlobalTableSettingsCommandInput) => Promise<DescribeGlobalTableSettingsCommandOutput>;
    const nativeDynamoDBDescribeKinesisStreamingDestination: (input: DescribeKinesisStreamingDestinationCommandInput) => Promise<DescribeKinesisStreamingDestinationCommandOutput>;
    const nativeDynamoDBDescribeLimits: (input: DescribeLimitsCommandInput) => Promise<DescribeLimitsCommandOutput>;
    const nativeDynamoDBDescribeTable: (input: DescribeTableCommandInput) => Promise<DescribeTableCommandOutput>;
    const nativeDynamoDBDescribeTableReplicaAutoScaling: (input: DescribeTableReplicaAutoScalingCommandInput) => Promise<DescribeTableReplicaAutoScalingCommandOutput>;
    const nativeDynamoDBDescribeTimeToLive: (input: DescribeTimeToLiveCommandInput) => Promise<DescribeTimeToLiveCommandOutput>;
    const nativeDynamoDBDisableKinesisStreamingDestination: (input: DisableKinesisStreamingDestinationCommandInput) => Promise<DisableKinesisStreamingDestinationCommandOutput>;
    const nativeDynamoDBEnableKinesisStreamingDestination: (input: EnableKinesisStreamingDestinationCommandInput) => Promise<EnableKinesisStreamingDestinationCommandOutput>;
    const nativeDynamoDBExecuteStatement: (input: ExecuteStatementCommandInput) => Promise<ExecuteStatementCommandOutput>;
    const nativeDynamoDBExecuteTransaction: (input: ExecuteTransactionCommandInput) => Promise<ExecuteTransactionCommandOutput>;
    const nativeDynamoDBExportTableToPointInTime: (input: ExportTableToPointInTimeCommandInput) => Promise<ExportTableToPointInTimeCommandOutput>;
    const nativeDynamoDBGetItem: (input: GetItemCommandInput) => Promise<GetItemCommandOutput>;
    const nativeDynamoDBListBackups: (input: ListBackupsCommandInput) => Promise<ListBackupsCommandOutput>;
    const nativeDynamoDBListContributorInsights: (input: ListContributorInsightsCommandInput) => Promise<ListContributorInsightsCommandOutput>;
    const nativeDynamoDBListExports: (input: ListExportsCommandInput) => Promise<ListExportsCommandOutput>;
    const nativeDynamoDBListGlobalTables: (input: ListGlobalTablesCommandInput) => Promise<ListGlobalTablesCommandOutput>;
    const nativeDynamoDBListTables: (input: ListTablesCommandInput) => Promise<ListTablesCommandOutput>;
    const nativeDynamoDBListTagsOfResource: (input: ListTagsOfResourceCommandInput) => Promise<ListTagsOfResourceCommandOutput>;
    const nativeDynamoDBPutItem: (input: PutItemCommandInput) => Promise<PutItemCommandOutput>;
    const nativeDynamoDBQuery: (input: QueryCommandInput) => Promise<QueryCommandOutput>;
    const nativeDynamoDBRestoreTableFromBackup: (input: RestoreTableFromBackupCommandInput) => Promise<RestoreTableFromBackupCommandOutput>;
    const nativeDynamoDBRestoreTableToPointInTime: (input: RestoreTableToPointInTimeCommandInput) => Promise<RestoreTableToPointInTimeCommandOutput>;
    const nativeDynamoDBScan: (input: ScanCommandInput) => Promise<ScanCommandOutput>;
    const nativeDynamoDBTagResource: (input: TagResourceCommandInput) => Promise<TagResourceCommandOutput>;
    const nativeDynamoDBTransactGetItems: (input: TransactGetItemsCommandInput) => Promise<TransactGetItemsCommandOutput>;
    const nativeDynamoDBTransactWriteItems: (input: TransactWriteItemsCommandInput) => Promise<TransactWriteItemsCommandOutput>;
    const nativeDynamoDBUntagResource: (input: UntagResourceCommandInput) => Promise<UntagResourceCommandOutput>;
    const nativeDynamoDBUpdateContinuousBackups: (input: UpdateContinuousBackupsCommandInput) => Promise<UpdateContinuousBackupsCommandOutput>;
    const nativeDynamoDBUpdateContributorInsights: (input: UpdateContributorInsightsCommandInput) => Promise<UpdateContributorInsightsCommandOutput>;
    const nativeDynamoDBUpdateGlobalTable: (input: UpdateGlobalTableCommandInput) => Promise<UpdateGlobalTableCommandOutput>;
    const nativeDynamoDBUpdateGlobalTableSettings: (input: UpdateGlobalTableSettingsCommandInput) => Promise<UpdateGlobalTableSettingsCommandOutput>;
    const nativeDynamoDBUpdateItem: (input: UpdateItemCommandInput) => Promise<UpdateItemCommandOutput>;
    const nativeDynamoDBUpdateTable: (input: UpdateTableCommandInput) => Promise<UpdateTableCommandOutput>;
    const nativeDynamoDBUpdateTableReplicaAutoScaling: (input: UpdateTableReplicaAutoScalingCommandInput) => Promise<UpdateTableReplicaAutoScalingCommandOutput>;
    const nativeDynamoDBUpdateTimeToLive: (input: UpdateTimeToLiveCommandInput) => Promise<UpdateTimeToLiveCommandOutput>;
}
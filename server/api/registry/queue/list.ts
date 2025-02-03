import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { DateTime } from 'luxon';
import type { RegistryItem } from '~/data/models/registry';

export default defineEventHandler(async (): Promise<RegistryItem[]> => {
  const config = useRuntimeConfig();
  const docClient = DynamoDBDocumentClient.from(
    new DynamoDBClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: config.app.aws_access_key_id,
        secretAccessKey: config.app.aws_secret_access_key,
      },
    })
  );

  try {
    const parsedResponse: RegistryItem[] = [];
    await docClient
      .send(
        new ScanCommand({
          TableName: 'MiniRegisterQueue',
        })
      )
      .then(({ Items }) => {
        parsedResponse.push(
          ...(Items as RegistryItem[]).map((item) => ({
            ...item,
            buildDate: DateTime.fromISO(item.buildDate as string).toISODate(),
          }))
        );
      });

    return parsedResponse;
  } catch (error: any) {
    throw new Error(`Error getting registry info - ${error?.message}`);
  }
});

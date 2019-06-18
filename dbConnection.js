import AWS from "aws-sdk";

const IS_OFFLINE = process.env.IS_OFFLINE;
const offlineOption = {
  region: "localhost",
  endpoint: "http://localhost:8888"
};

export const dynamoDb = new AWS.DynamoDB.DocumentClient(
  IS_OFFLINE === "true" ? offlineOption : {}
);

export const TABLE_NAME = process.env.DYNAMODB_TABLE;

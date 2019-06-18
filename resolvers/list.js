import { dynamoDb, TABLE_NAME } from "../dbConnection";

export const list = async () => {
  const params = {
    TableName: TABLE_NAME
  };

  try {
    const result = await dynamoDb.scan(params).promise();
    return result.Items;
  } catch (err) {
    console.log(err);
  }
};

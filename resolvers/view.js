import { dynamoDb, TABLE_NAME } from "../dbConnection";

export const view = async user => {
  const params = {
    TableName: TABLE_NAME,
    Key: user
  };

  try {
    const result = await dynamoDb.get(params).promise();
    return result.Item;
  } catch (err) {
    console.log(err);
  }
};

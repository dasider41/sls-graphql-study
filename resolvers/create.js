import { dynamoDb, TABLE_NAME } from "../dbConnection";
import uuid from "uuid/v1";

export const create = async arg => {
  const TIME_STAMP = new Date().getTime();
  const newUser = {
    id: uuid(),
    name: arg.input.name,
    update_at: TIME_STAMP,
    created_at: TIME_STAMP
  };
  const params = {
    TableName: TABLE_NAME,
    Item: newUser
  };

  try {
    const result = await dynamoDb.put(params).promise();
    return newUser;
  } catch (err) {
    return {};
  }
};

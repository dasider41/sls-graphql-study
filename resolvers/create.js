import { dynamoDb, TABLE_NAME } from "../dbConnection";
import uuid from "uuid/v1";

export const create = async input => {
  const TIME_STAMP = new Date().getTime();
  const NEW_USER = {
    id: uuid(),
    name: input.name,
    update_at: TIME_STAMP,
    created_at: TIME_STAMP
  };
  const params = {
    TableName: TABLE_NAME,
    Item: NEW_USER
  };

  try {
    await dynamoDb.put(params).promise();
    return NEW_USER;
  } catch (err) {
    console.log(err);
  }
};

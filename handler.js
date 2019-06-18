import { graphql } from "graphql";
import { schema, resolvers } from "./schema";

export const query = async event => {
  const res = await graphql(schema, event.body, resolvers);
  return { statusCode: 200, body: JSON.stringify(res) };
};

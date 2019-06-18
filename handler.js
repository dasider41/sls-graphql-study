import { graphql } from "graphql";
import { schema, resolvers } from "./schema";

export const query = (event, context, callback) => {
  graphql(schema, event.body, resolvers)
    .then(res => callback(null, { statusCode: 200, body: JSON.stringify(res) }))
    .catch(callback);
};

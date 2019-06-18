import { buildSchema } from "graphql";

import { create } from "./resolvers/create";
import { view } from "./resolvers/view";

export const schema = buildSchema(`
  type Query {
    getUser(id: String!): User
  }

  type Mutation {
    createUser(input: UserInput): User
  }

  type User {
    id: String!
    name: String
    updated_at: String
    created_at: String
  }

  input UserInput {
    name: String
  }
`);

export const resolvers = {
  getUser: id => view(id),
  createUser: arg => create(arg)
};

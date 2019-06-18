import { gql } from "apollo-server-lambda";

import { create } from "./resolvers/create";
import { view } from "./resolvers/view";

export const typeDefs = gql`
  type Query {
    hello: String
    getUser(id: String!): User
  }

  type User {
    id: String!
    name: String
    created_at: String
  }

  type Mutation {
    createUser(input: UserInput): User
  }

  input UserInput {
    name: String
  }
`;

export const resolvers = {
  Query: {
    hello: () => "Hello Apollo!!",
    getUser: (_, args) => view(args)
  },
  Mutation: {
    createUser: (_, args) => create(args.input)
  }
};

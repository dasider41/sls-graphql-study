import { gql } from "apollo-server-lambda";

import { create } from "./resolvers/create";
import { view } from "./resolvers/view";
import { list } from "./resolvers/list";

export const typeDefs = gql`
  type Query {
    hello: String
    getUser(id: String!): User
    getUsers: [User]
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
    getUser: (_, args) => view(args),
    getUsers: () => list()
  },
  Mutation: {
    createUser: (_, args) => create(args.input)
  }
};

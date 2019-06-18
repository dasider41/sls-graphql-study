import { ApolloServer } from "apollo-server-lambda";
import { typeDefs, resolvers } from "./schema";

const server = new ApolloServer({ typeDefs, resolvers });
export const query = server.createHandler();

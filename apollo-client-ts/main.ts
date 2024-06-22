import { ApolloClient, gql } from "@apollo/client/core";
import { HttpLink } from "@apollo/client/link/http";
import { InMemoryCache } from "@apollo/client/cache";
import { prettyPrint } from "./utils.js";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql", fetch }),
  cache: new InMemoryCache(),
});

const GET_CHARACTERS = gql(`
  query {
    getMessage
  }
`);

const { data } = await client.query({
  query: GET_CHARACTERS,
});

prettyPrint(data);
``
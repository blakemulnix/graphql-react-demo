import { ApolloClient, gql } from '@apollo/client/core/index.js';
import { HttpLink } from '@apollo/client/link/http/index.js';
import { InMemoryCache } from '@apollo/client/cache/index.js';
import { prettyPrint } from "./utils.js";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http:localhost:4000/graphql", fetch }),
  cache: new InMemoryCache(),
});

const getCharacters = gql(`
  query {
    getMessage
  }
`);

const { data } = await client.query({
  query: getCharacters,
});

prettyPrint(data)
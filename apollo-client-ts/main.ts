import { ApolloClient, gql } from "@apollo/client/core";
import { HttpLink } from "@apollo/client/link/http";
import { InMemoryCache } from "@apollo/client/cache";
import { prettyPrint } from "./utils.js";
import { GetBikesQuery } from './__generated__/graphql.js';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql", fetch }),
  cache: new InMemoryCache(),
});

const GET_BIKES = gql(`
  query GetBikes {
    bikes {
      brand
      model
      rides {
        name
        distance
      }
    }
}`);

const { data } = await client.query<GetBikesQuery>({
  query: GET_BIKES,
});

prettyPrint(data);
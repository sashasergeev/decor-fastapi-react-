import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

const uri = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL;
const hasura_secret = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET;

const link = new HttpLink({
  uri,
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": hasura_secret,
  },
  fetch,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;

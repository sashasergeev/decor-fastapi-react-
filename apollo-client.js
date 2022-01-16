import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;

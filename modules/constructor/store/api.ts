import { DocumentNode } from "graphql";
import client from "../../../apollo-client";

const api = async (query: DocumentNode) =>
  await client.query({
    query,
  });

export type ApiType = ReturnType<typeof api>

export default api;

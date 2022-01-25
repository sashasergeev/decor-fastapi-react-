import client from "../../../apollo-client";

const api = async (query) =>
  await client.query({
    query,
  });

export default api;

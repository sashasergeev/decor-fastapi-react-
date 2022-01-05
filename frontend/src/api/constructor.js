import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";

export const fetchUsage = async () => {
  const url = "/usage/all";
  const data = await axios.get(url);
  return data;
};

export const fetchCategories = async ({ queryKey }) => {
  const [usage, applies] = queryKey[0].split(" ");
  const url = `/category/usage?applies=${applies.toLowerCase()}&usage=${usage}`;
  const data = axios.get(url);
  return data;
};

export const fetchItems = async ({ queryKey }) => {
  const categoryId = queryKey[0];
  const url = `/category/${categoryId}`;
  const data = axios.get(url);
  return data;
};

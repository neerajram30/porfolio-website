import { createClient } from "urql";

// YOUR API URL
const API_BASE_URL = "http://localhost:3000";

const client = createClient({
  url: API_BASE_URL,
});

export { client }
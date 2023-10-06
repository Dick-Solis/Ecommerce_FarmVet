import { BASE_URI } from "../config";

export async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {
  if (body) {
    headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Content-type": "multipart/form-data",
      ...headers
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null
  };

  let data;
  try {
    const response = await fetch(BASE_URI + endpoint, config);
    data = await response.json();
  } catch (error) {
    data = error;
  }

  return data;
}
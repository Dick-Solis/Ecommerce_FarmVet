import { BASE_URL } from "../config/config";

export default async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {
  // const token = sessionStorage.getItem(tokenKey);
  const token = "";

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
      ...headers
    };
  }

  if (body) {
    headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      ...headers
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null
  };

  const response = await fetch(BASE_URL + endpoint, config);

  let data;
  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
    return data;
  }

  return data;
}

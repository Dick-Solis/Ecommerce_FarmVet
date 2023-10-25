import apiFetch from "../fetch/apiFetch";

export async function showAllProducts(){
  const response = await apiFetch('/productos/showAllProducts/10');
  return response;
}
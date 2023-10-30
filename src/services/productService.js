import apiFetch from "../fetch/apiFetch";

export async function showAllProducts(currentPage = 1,amountProducts = 10){
  const response = await apiFetch(`/productos/showAllProducts/${amountProducts}?page=${currentPage}`);
  return response;
}
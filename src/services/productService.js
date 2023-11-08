import apiFetch from "../fetch/apiFetch";

export async function showAllProducts(currentPage = 1,amountProducts = 10){
  const response = await apiFetch(`/productos/showAllProducts/${amountProducts}?page=${currentPage}`);
  return response;
}

export async function searchProducts(nameProduct){
  const response = await apiFetch(`/productos/searchProduct?q=${nameProduct}`);
  return response;
}

export async function showProductPage(id){
  const response =  await apiFetch(`/productos/showProductById/${id}`);
  return response;
}
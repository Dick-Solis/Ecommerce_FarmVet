import apiFetch from "../fetch/apiFetch";

export async function getMarcas(){
  const response = await apiFetch('/marcas/showAllMarcas');
  return response;
}
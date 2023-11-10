import apiFetch from "../fetch/apiFetch";

export async function addReclamacion(body){
  const response = await apiFetch(`/libroReclamaciones/registerLibroReclamacion`,{method:"POST",body:body});
  return response;
}

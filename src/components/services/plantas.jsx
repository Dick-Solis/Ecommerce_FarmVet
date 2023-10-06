import { apiFetch } from "./apifetch";

export async function getAllPlants(){
  const data  = await apiFetch("/plantas")
  return data;
}

export async function getPlantTipos(id){
  const data = await apiFetch(`/plantas/MostrarTipo/${id}`);
  return data;
}
import styled from "@emotion/styled";
import { ScrollHorizontal } from "../components/scroll/horizontaScroll";
import { getMarcas } from "../services/marcasServices";
import { useState,useEffect } from "react";
import { SkeletonCard } from "../components/skeleton/skeletonCard";

//#region
  const ContainerMarcas = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
  `;

  const ImageStyled = styled.img`
    width: 150px;
    height: 100px;
  `;

//#endregion

export function ContentSectionMarcas(){
  const [dataMarcas,setDataMarcas] = useState([]);
  const arrayDeRepeticiones = new Array(10).fill(5);
  useEffect(() =>{
    getMarcas()
      .then(response => setDataMarcas(response));
  },[])

  return(
    <ContainerMarcas id='marcas'>
      <ScrollHorizontal scrollAmount={200} title={"Marcas"}>
        {dataMarcas.length === 0 ? arrayDeRepeticiones.map((elemento, indice) => (
          <SkeletonCard key={indice} ancho='250px' alto='150px' />
        )):dataMarcas.map(marca =>(
          <ImageStyled src={marca.imagen} alt={marca.nombre} key={marca.id_marca}/>
        ))}
      </ScrollHorizontal>
    </ContainerMarcas>
  )
}
import styled from "@emotion/styled";
import { ScrollHorizontal } from "../components/scroll/horizontaScroll";
import { getMarcas } from "../services/marcasServices";
import { useState,useEffect } from "react";


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
    filter: grayscale(100%);
    transition: filter 0.3s ease-in-out;
    &:hover{
      filter: grayscale(0%);
    }
  `;

//#endregion

export function ContentSectionMarcas(){
  const [dataMarcas,setDataMarcas] = useState([]);

  useEffect(() =>{
    getMarcas()
      .then(response => setDataMarcas(response));
  },[])

  return(
    <ContainerMarcas id='marcas'>
      <ScrollHorizontal scrollAmount={200} title={"Marcas"}>
        {dataMarcas.map(marca =>(
          <ImageStyled src={marca.imagen} alt={marca.nombre} key={marca.id_marca}/>
        ))}
      </ScrollHorizontal>
    </ContainerMarcas>
  )
}
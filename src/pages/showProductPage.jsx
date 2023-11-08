import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { ComponentFooter } from "../components/footer/footer";
import {ImageZoom } from "../components/image/styledShowImage";
import { useEffect,useState } from "react";
import { showProductPage } from "../services/productService";
import { Accordion } from "../components/acordions/acordion";

//#region
const StyledPage = styled.main`

  `;

const ContainerPage = styled.section`
    min-height: 100vh;
    padding-top: 70px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

const ContainerDescription = styled.section`
  display: flex;
  gap: 0 50px;
  @media(max-width: 768px){
    flex-wrap: wrap;
  }
`;

const StyledTitle = styled.h2`
  margin-top: 30px;
  color: #ffffff;
  @media(max-width: 768px){
    margin-top: 0;
  }
`;

const ContainerDataDescription = styled.div`
  width: 50%;
  color: #ffffff;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media(max-width:768px){
    width: 100%;
    padding: 20px;
  }
`;

const ContainerPrice = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 20px;
  @media(max-width:768px){
    gap: 0 7px;
  }
`;

const PorcentajeDescuento = styled.h3`
  background-color: red;
  padding: 5px;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  background-color: #ff0000;
  border: none;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
`;

//#endregion

export function ShowProductPage() {
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState([]);
  const [activeData,setActiveData] = useState(true);

  useEffect(() => {
    showProductPage(id)
      .then((response) => {
        setActiveData(false)
        setDataProduct(response)
      });
  },[])

  return (
    <StyledPage>
      <ContainerPage>
        <ContainerDescription>
          <ImageZoom image={dataProduct.imagen} activeData={activeData}/>
          <ContainerDataDescription>
            <StyledTitle>{dataProduct.nombre}</StyledTitle>
            <ContainerPrice>
              <h3>Precio:</h3>
              {dataProduct.en_descuento === "NO" ? <h3>S/{dataProduct.precio}</h3> : <h3><s>S/{dataProduct.precio}</s></h3> }
              {dataProduct.en_descuento === "SI" && <PorcentajeDescuento>-{dataProduct.descuento * 100}%</PorcentajeDescuento>}
              {dataProduct.en_descuento === "SI" && <h3>S/{dataProduct.precio - (dataProduct.descuento * dataProduct.precio)}</h3>}
            </ContainerPrice>
            <StyledButton>
              Comprar
            </StyledButton>
            <div>
              <Accordion title="Título 1" content="Contenido del primer acordeón" />
              <Accordion title="Título 1" content="Contenido del primer acordeón" />
              <Accordion title="Título 1" content="Contenido del primer acordeón" />
              <Accordion title="Título 1" content="Contenido del primer acordeón" />
            </div>
          </ContainerDataDescription>
        </ContainerDescription>
      </ContainerPage>
      <ComponentFooter />
    </StyledPage>
  )
}
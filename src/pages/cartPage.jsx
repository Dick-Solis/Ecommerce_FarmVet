import styled from "@emotion/styled";
import {BiArrowBack} from 'react-icons/bi';
import { TitleSection } from "../components/Texts/text";
import { useState, useEffect } from "react";
import { SectionCartProduct } from "../section/sectionCartProduct";
import { ComponentFooter } from "../components/footer/footer";
//#region
  const ContainerPage = styled.main`
    height: 100vh;
  `;

  const StyldHeader = styled.header`
    padding: 70px 0 0 0;
    display: flex;
    justify-content: space-between;
  `;

  const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:5px 10px;
    background-color: #0071E1;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    font-size: 15px;
    gap: 10px;
    cursor: pointer;
  `;

  const ContainerCart = styled.section`
    display: flex;
    margin-top: 20px;
    margin-bottom: 40px;
  `;

//#endregion

export function CartPage(){
  let dataProducts = JSON.parse(localStorage.getItem('dataProductsCart'));
  const [productsCart, setProductsCart] = useState(dataProducts);

  useEffect(() => {
    dataProducts = JSON.parse(localStorage.getItem('dataProductsCart'));
    localStorage.setItem('dataProductsCart', JSON.stringify(productsCart));
  }, [productsCart]);


  return(
  <ContainerPage>
    <StyldHeader>
      <TitleSection>
        Carrito de Compras
      </TitleSection>
      <StyledButton>
        <BiArrowBack/>
        Seguir Comprando
      </StyledButton>
    </StyldHeader>
    {/* <WidgetShoppingCart/> */}
    <ContainerCart>
      <SectionCartProduct 
        setProductsCart={setProductsCart}
        productsCart={productsCart}
        />
    </ContainerCart>
    <ComponentFooter/>
  </ContainerPage>
  )
}
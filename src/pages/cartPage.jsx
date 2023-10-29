import styled from "@emotion/styled";
import {BiArrowBack} from 'react-icons/bi';
import { TitleSection } from "../components/Texts/text";
import { WidgetShoppingCart } from "../components/widgets/widgetShoppingCart";
import { useState } from "react";
import { StepProgressBar } from "../components/widgets/widgetCart";
import { SectionCartProduct } from "../section/sectionCartProduct";
//#region
  const ContainerPage = styled.main`
    height: 100vh;
    padding: 70px 10px 0 10px;
  `;

  const StyldHeader = styled.header`
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
  `;

//#endregion

export function CartPage(){
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
      <SectionCartProduct/>
    </ContainerCart>
  </ContainerPage>
  )
}
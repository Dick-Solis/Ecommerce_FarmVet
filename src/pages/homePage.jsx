import { ComponentSlider } from "../components/slider/slider";
import { SectionPets } from "../section/sectionPets";
import styled from "@emotion/styled";
import { SectionProducts } from "../section/sectionProducts";
import SectionCardContacts from "../section/sectionContactanos";
import { ComponentFooter } from "../components/footer/footer";
import { ShoppingCart } from "../components/shopping/shoppingCart";
import { ContentSectionMarcas } from "../section/sectionMarcas";
import { useEffect,useState } from "react";

//#region
  const StyledMain = styled.main`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    gap: 20px;
  `;

  const ContentPage  = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1070px;
    gap: 15px;
  `;
//#endregion


function HomePage(){
  return (
    <StyledMain>
      <ComponentSlider/>
      <ContentPage>
        <SectionProducts/>
        <SectionCardContacts/>
        <ContentSectionMarcas/>
      </ContentPage>
      <ComponentFooter/>
      <ShoppingCart/>
    </StyledMain>
  )
}

export default HomePage;
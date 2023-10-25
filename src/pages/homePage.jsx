import {ComponentNavbarHeader} from "../components/navbar/navbar";
import { ComponentNavbar } from "../components/navbar/navbarHeader";
import { ComponentSlider } from "../components/slider/slider";
import SectionMap from "../section/sectionMap";
import { SectionPets } from "../section/sectionPets";
import styled from "@emotion/styled";
import { SectionProducts } from "../section/sectionProducts";
import SectionCardContacts from "../section/sectionContactanos";
import { TitleSection } from "../components/Texts/text";
import { ComponentFooter } from "../components/footer/footer";
import { ShoppingCart } from "../components/shopping/shoppingCart";
import { ContentSectionMarcas } from "../section/sectionMarcas";

//#region
 const StyledMain = styled.main`
    display: flex;
    flex-direction: column; 
    gap: 20px;
 `;
//#endregion


function HomePage(){
  return (
    <StyledMain>
      <ComponentSlider/>
      <SectionProducts/>
      <SectionCardContacts/>
      <ContentSectionMarcas/>
      <ComponentFooter/>
      <ShoppingCart/>
    </StyledMain>
  )
}

export default HomePage;
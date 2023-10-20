import {ComponentNavbarHeader} from "../components/navbar/navbar";
import { ComponentNavbar } from "../components/navbar/navbarHeader";
import { ComponentSlider } from "../components/slider/slider";
import SectionMap from "../section/sectionMap";
import { SectionPets } from "../section/sectionPets";
import styled from "@emotion/styled";
import { SectionProducts } from "../section/sectionProducts";
import SectionCardContacts from "../section/sectionContactanos";

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
      <SectionCardContacts/>
      <SectionProducts/>
    </StyledMain>
  )
}

export default HomePage;
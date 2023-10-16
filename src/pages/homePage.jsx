import {ComponentNavbarHeader} from "../components/navbar/navbar";
import { ComponentNavbar } from "../components/navbar/navbarHeader";
import { ComponentSlider } from "../components/slider/slider";
import SectionMap from "../section/sectionMap";
import { SectionPets } from "../section/sectionPets";
import styled from "@emotion/styled";

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
      
    </StyledMain>
  )
}

export default HomePage;
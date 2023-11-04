import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { ComponentFooter } from "../components/footer/footer";

//#region
  const StyledPage = styled.main`

  `;

  const ContainerPage = styled.section`
    min-height: 100vh;
  `;

//#endregion

export function ShowProductPage(){
  const { id } = useParams();
  return(
    <StyledPage>
      <ContainerPage>
        
      </ContainerPage>
      <ComponentFooter/>
    </StyledPage>
  )
}
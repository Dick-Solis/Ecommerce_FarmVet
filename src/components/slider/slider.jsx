import styled from '@emotion/styled';
import { ComponentNavbar } from '../navbar/navbarHeader';
import ImagePortada from '../../assets/perrito.gif';

//#region
const ContainerSlider = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 90px 5px 0 5px;
    color: #ffffff;
    height: max-content;
  `;

const StyledImage = styled.img`
    @media(max-width:768px){
      height: 100%;
    }
  `;

const SectionImage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0071e1;
    border-radius: 50%;
    width: 100%;
    height: 100vh;
    @media(max-width: 768px){
      width: 100%;
      height: 100%;
    }
  `;

const StyledBorder = styled.div`
    border: 12px double #0071e1 ;
    border-radius: 50%;
    width: 100%;
    height: 100vh;
    padding: 10px;
    @media(max-width: 768px){
      width: 100%;
      height: 100%;
    }
  `;

const ContainerDescription = styled.div`
    display: flex;
    gap:20px;
    width: 100%;
    height: 100%;
    @media(max-width: 1000px){
      flex-direction: column-reverse
      /* flex-direction: column; */
    }
  `;

const SectionDescription = styled.section`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    @media(max-width: 768px){
      /* align-items: flex-start; */
      align-items: center;
    }
  `;

const StyledTitle = styled.h2`
  font-family: "Bebas Neue";
  font-weight: 900;
  line-height: 80px;
  font-size: 100px;
  text-transform: uppercase;
  @media(max-width:768px){
    font-size: 50px;
    line-height: 50px;
  }
`;

const StyledDivisor = styled.hr`
  height: 4px;
  color: #ffffff;
  background-color: #ffffff;
  border:none;
  width: 50%;
`;

const StyledDescription = styled.p`
  font-size: 20px;
  font-weight: bold;
  @media(max-width:1000px){
    font-size: 15px;
  }
`;

const ContentNavbar = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1170px;
`;
//#endregion

export function ComponentSlider() {
  return (
    <ContainerSlider>
      <ContainerDescription>
        <StyledBorder>
          <SectionImage>
            <StyledImage src={ImagePortada} alt="" />
          </SectionImage>
        </StyledBorder>

        <SectionDescription>
          <StyledTitle><span style={{fontWeight: "100"}}>lo mejor  para </span><br/> tu mejor amigo</StyledTitle>
          <StyledDivisor/>
          <StyledDescription>Salud y Nutrición Animal</StyledDescription>
        </SectionDescription>
      </ContainerDescription>
      <ContentNavbar>
        <ComponentNavbar />
      </ContentNavbar>
    </ContainerSlider>
  )
}

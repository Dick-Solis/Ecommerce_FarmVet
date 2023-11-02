import styled from '@emotion/styled';
import { ComponentNavbar } from '../navbar/navbarHeader';
import ImagePortada from '../../assets/perrito.png';

//#region
const ContainerSlider = styled.div`
    padding: 70px 5px 0 5px;
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
      width: auto;
      height: auto;
    }
  `;

const StyledBorder = styled.div`
    border: 12px double #0071e1 ;
    border-radius: 50%;
    width: 100%;
    height: 100vh;
    padding: 10px;
    @media(max-width: 768px){
      width: auto;
      height: auto;
    }
  `;

const ContainerDescription = styled.div`
    display: flex;
    gap:20px;
    @media(max-width: 1000px){
      flex-direction: column-reverse
    }
  `;

const SectionDescription = styled.section`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    @media(max-width: 768px){
      align-items: flex-start;
    }
  `;

const StyledTitle = styled.h2`
  font-family: "Bebas Neue";
  font-weight: 900;
  line-height: 80px;
  font-size: 100px;
  text-transform: uppercase;
  @media(max-width:768px){
    font-size: 80px;
    line-height: 80px;
  }
`;

const StyledDivisor = styled.hr`
  height: 4px;
  color: #ffffff;
  background-color: #ffffff;
  border:none;
  width: 70%;
`;

const StyledDescription = styled.p`
  font-size: 20px;
  font-weight: bold;
  @media(max-width:1000px){
    font-size: 15px;
  }
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
          <StyledTitle>lo mejor  para <br/> tu mejor amigo</StyledTitle>
          <StyledDivisor/>
          <StyledDescription>Salud y Nutrición Animal</StyledDescription>
        </SectionDescription>
      </ContainerDescription>
      <ComponentNavbar />
    </ContainerSlider>
  )
}

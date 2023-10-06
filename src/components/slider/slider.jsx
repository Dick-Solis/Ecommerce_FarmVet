import styled from '@emotion/styled';
import fondoSlider from '../../assets/fondoVet.jpg'
import { ComponentNavbarHeader } from '../navbar/navbarHeader';

//#region
  const ContainerSlider = styled.div`
    padding: 10px 120px;
    @media(max-width:768px){
      padding: 10px 20px;
    }
  `;

  const StyledImage = styled.img`
    border-radius: 20px;
    width: 100%;
    height: 600px;
    @media(max-width:768px){
      height: 100%;
    }
  `;
//#endregion

export function ComponentSlider(){
  return(
    <ContainerSlider>
      <StyledImage src={fondoSlider}/>
      <ComponentNavbarHeader/>
    </ContainerSlider>
  )
}

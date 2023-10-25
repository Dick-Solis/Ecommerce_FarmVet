import styled from "@emotion/styled";
import brit from '../assets/brit.png';
import dogChow from '../assets/dogChow.jpg';
import mimaskot from '../assets/mimaskot.png';
import pedigree from '../assets/Pedigree-logo.png';
import ricocan from '../assets/ricocan.jpg';
import { TitleSection } from "../components/Texts/text";

//#region
  const ContainerMarcas = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
  `;

  const ImageStyled = styled.img`
    width: 150px;
    height: 100px;
    filter: grayscale(100%);
    transition: filter 0.3s ease-in-out;
    &:hover{
      filter: grayscale(0%);
    }
  `;

  const Marcas = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 17px;
  `;
//#endregion

export function ContentSectionMarcas(){
  return(
    <ContainerMarcas id='marcas'>
      <TitleSection>Marcas Utilizadas</TitleSection>
      <Marcas>
        <ImageStyled src={brit} alt="brit logo"/>
        <ImageStyled src={dogChow} alt="dogChow logo"/>
        <ImageStyled src={mimaskot} alt="mimaskot logo"/>
        <ImageStyled src={pedigree} alt="pedigree logo"/>
        <ImageStyled src={ricocan} alt="ricocan logo"/>
      </Marcas>
    </ContainerMarcas>
  )
}
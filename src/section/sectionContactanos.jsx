import styled from '@emotion/styled';
import CardContact from '../components/cards/cardsContact';
import calendar from '../assets/calendar.svg';
import phone from '../assets/phone.svg';
import ubication from '../assets/ubication.svg';
import { TitleSection } from '../components/Texts/text';
import SectionMap from './sectionMap';
import logo1 from "../assets/DATOS-FARMAVET.jpg";
import logo2 from "../assets/DATOS-FARMAVET.01.jpg";
import logo3 from "../assets/DATOS-FARMAVET.02.jpg";

//#region
const ContainerContact = styled.section`
    width: 100%;
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

const ContainerCardContact = styled.section`
  width: 30%;
  display: flex ;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 20px; 
  padding: 10px;
  @media(max-width:650px){
    width: 100%;
  }
`;

const StyledDescription = styled.div`
    font-weight: bold;
    color: #0071e1;
  `;

const StyledContent = styled.section`
  display: flex;
  @media(max-width:650px){
    flex-wrap: wrap;
  }
`;

const StyledImage = styled.img`
  width: 250px;
  height: 150px;
`;

const ContentTitles = styled.div``;

//#endregion

function SectionCardContacts() {
  return (
    <ContainerContact id='contact'>
      <ContentTitles>
        <TitleSection>Contáctanos</TitleSection>
      </ContentTitles>
      <StyledContent>    
        <ContainerCardContact>
            {/* <CardContact image={calendar}>
              <StyledDescription>Lunes - Sabado</StyledDescription>
              <StyledDescription>9:00 am - 19:00 pm</StyledDescription>
            </CardContact>
            <CardContact image={phone}>
              <StyledDescription>Llamanos</StyledDescription>
              <StyledDescription>972 473 134</StyledDescription>
            </CardContact>
            <CardContact image={ubication}>
              <StyledDescription>Huánuco - Perú</StyledDescription>
              <StyledDescription>Jirón Abtao #443</StyledDescription>
            </CardContact> */}
            <StyledImage src={logo1} alt="" />
            <StyledImage src={logo2} alt="" />
            <StyledImage src={logo3} alt="" />
        </ContainerCardContact>
        <SectionMap/>
      </StyledContent>
    </ContainerContact>
  )
}

export default SectionCardContacts;
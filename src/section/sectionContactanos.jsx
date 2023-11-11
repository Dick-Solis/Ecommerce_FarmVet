import styled from '@emotion/styled';
import CardContact from '../components/cards/cardsContact';
import calendar from '../assets/calendar.svg';
import phone from '../assets/phone.svg';
import ubication from '../assets/ubication.svg';
import { TitleSection } from '../components/Texts/text';
import SectionMap from './sectionMap';


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

const ContentTitles = styled.div``;

const StyledImage = styled.img`
  width: 250px;
  height: 250px;
`;
//#endregion

function SectionCardContacts() {
  return (
    <ContainerContact id='contact'>
      <ContentTitles>
        <TitleSection>Contáctanos</TitleSection>
      </ContentTitles>
      <StyledContent>
        
        <ContainerCardContact>
          {/* <ScrollHorizontal scrollAmount={200}> */}
            <CardContact image={calendar}>
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
            </CardContact>

          {/* </ScrollHorizontal> */}
        </ContainerCardContact>
        <SectionMap/>
      </StyledContent>
    </ContainerContact>
  )
}

export default SectionCardContacts;
import styled from '@emotion/styled';
import CardContact from '../components/cards/cardsContact';
import calendar from '../assets/calendar.svg';
import phone from '../assets/phone.svg';
import ubication from '../assets/ubication.svg';

//#region
  const ContainerContact = styled.section`
    width: 100%;
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px 20px; 
    padding: 10px;
  `;

  const StyledDescription = styled.p`
    font-weight: bold;
    color: #0071e1;
  `;
//#endregion

function SectionCardContacts(){
  return (
    <ContainerContact id='contact'>
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
    </ContainerContact>
  )
}

export default SectionCardContacts;
import styled from '@emotion/styled';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {BiSolidTimeFive} from 'react-icons/bi';
import {BsFillTelephoneFill} from 'react-icons/bs';

//#region
  const SectionContentMap = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 0 120px;
    gap: 25px;
    @media(max-width:768px){
      padding: 0 15px;
    }
  `;

  const ContentMap = styled.iframe`
    display: flex;
    width: 50%;
    height: 400px;
    @media(max-width:1000px){
      width: 100%;
    }
  `;

  const StyledTitle = styled.h2`
    font-weight: bold;
  `;

  const StyledDescription = styled.p`
    font-weight: bold;
  `;
//#endregion

function SectionMap() {
  return (
    <SectionContentMap>
      <ContentMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.5055775053027!2d-76.24435083049094!3d-9.932099778379765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2e1418de909%3A0x39012fca3f16449d!2sJr.%20Abtao%20443%2C%20Hu%C3%A1nuco%2010001!5e0!3m2!1ses-419!2spe!4v1696583171077!5m2!1ses-419!2spe" 
      style={{border:0}} allowFullScreen="" 
      loading="lazy" referrerPolicy="no-referrer-when-downgrade"></ContentMap>
      <div>
        <StyledTitle>Ubicación</StyledTitle>
        <StyledDescription><FaMapMarkerAlt/> Jr. Abtao #443</StyledDescription>
        <br/>
        <StyledTitle>Horarios</StyledTitle>
        <StyledDescription><BiSolidTimeFive/> Jr. Lunes-Sábado || 9:00 am - 19:00 pm</StyledDescription>
        <br/>
        <StyledTitle>Contáctanos</StyledTitle>
        <StyledDescription><BsFillTelephoneFill/> 972 473 134</StyledDescription>
      </div>
    </SectionContentMap>
  )
}

export default SectionMap;
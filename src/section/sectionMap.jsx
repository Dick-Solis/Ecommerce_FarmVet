import styled from '@emotion/styled';

//#region
  const SectionContentMap = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%; 
    gap: 25px;
    @media(max-width:768px){
      padding: 0 15px;
      width: 100%;
    }
  `;

  const ContentMap = styled.iframe`
    display: flex;
    width: 100%;
    padding: 20px;
    height: 400px;
    @media(max-width:1000px){
      width: 100%;
    }
  `;

//#endregion

function SectionMap() {
  return (
    <SectionContentMap>
      <ContentMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.5055775053027!2d-76.24435083049094!3d-9.932099778379765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2e1418de909%3A0x39012fca3f16449d!2sJr.%20Abtao%20443%2C%20Hu%C3%A1nuco%2010001!5e0!3m2!1ses-419!2spe!4v1696583171077!5m2!1ses-419!2spe" 
      style={{border:0}} allowFullScreen="" 
      loading="lazy" referrerPolicy="no-referrer-when-downgrade"></ContentMap>
    </SectionContentMap>
  )
}

export default SectionMap;
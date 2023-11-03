import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import logoCompany from '../../assets/LOGO-01.png';
import { SectionSocialIcons } from '../widgets/widgetSocialIcons';
import { TextSection, TitleSectionFooter } from '../Texts/text';

//#region
  const StyledFooter = styled.footer`
    align-self: flex-end;
    width: 100%;
    display: flex;
    padding: 15px 25px;
    background-color: #0071e1;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px 150px;
    color: #ffffff;
  `;

  const SectionFooter = styled.section`
    display: flex;
    flex-direction: column;
    :nth-of-type(3){
      width: 300px;
    }
  `;

  const StyledImage = styled.img`
    width: 200px;
    height: 60px;
  `;


   const StyledNavLink = styled(NavLink)`
    font-style: none;
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
   `;
//#endregion

export function ComponentFooter(){
  return(
    <StyledFooter>
      <SectionFooter>
        <TitleSectionFooter>Atención al CLiente</TitleSectionFooter>
        <StyledNavLink to='politicas_de_privacidad'>Política de Privacidad</StyledNavLink>
        {/* <NavLink>Política de Privacidad</NavLink> */}
      </SectionFooter>
      <SectionFooter>
        <TitleSectionFooter>Contáctanos</TitleSectionFooter>  
        <StyledImage src={logoCompany} alt="" />
        <TextSection>FARMAVET</TextSection>
        <SectionSocialIcons/>
      </SectionFooter>
      <SectionFooter>
        <TitleSectionFooter>Información Empresa</TitleSectionFooter>
        <TextSection>Somos una empresa especializada en la venta y servicio de productos veterinarios y equipos bioseguros.</TextSection>
      </SectionFooter>
    </StyledFooter>
  )
}

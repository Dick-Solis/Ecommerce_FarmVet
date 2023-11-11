import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import logoCompany from '../../assets/LOGO-01.png';
import { SectionSocialIcons } from '../widgets/widgetSocialIcons';
import libro from '../../assets/libro.png';

//#region
  const ContentFooter = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family:Arial, sans-serif;
  `;

  const StyledFooter = styled.section`
    align-self: flex-end;
    width: 100%;
    display: flex;
    padding: 50px 10px;
    background-color: #0071e1;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px 180px;
    color: #ffffff;
    font-family:Arial, sans-serif;
  `;

  const SectionPublisher = styled.section`
    background-color: #0071e1;
    color: #ffffff;
    text-align: center;
    padding: 10px 20px;
  `;

  const SectionFooter = styled.section`
    display: flex;
    flex-direction: column;
    gap: 7px;
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
    font-family:Arial, sans-serif;
    color: #ffffff;
    font-weight: 400;
   `;

  const StyledTitle = styled.h3`
    /* text-align: center; */
    font-weight: bold;
  `;
//#endregion

export function ComponentFooter(){
  return(
    <ContentFooter>
      <StyledFooter>
        <SectionFooter>
          <StyledTitle>Atención al CLiente</StyledTitle>
          <StyledNavLink to='/politicas_de_privacidad'>Política de Privacidad</StyledNavLink>
          <p>Libro de Reclamaciones</p>
          <StyledNavLink to='/reclamaciones'>
            <StyledImage src={libro} alt="" />
          </StyledNavLink>
        </SectionFooter>
        <SectionFooter>
          <StyledImage src={logoCompany} alt="" />
          <StyledTitle>FARMAVET</StyledTitle>
          <SectionSocialIcons/>
        </SectionFooter>
        <SectionFooter>
          <StyledTitle>Información Empresa</StyledTitle>
          <p>info@farmavethuanuco.com</p>
        </SectionFooter>
      </StyledFooter>
      <SectionPublisher>
        <h4>Todos los derechos reservados @Grupo Rino || asesoria@rino101.com</h4>
      </SectionPublisher>
    </ContentFooter>
  )
}

import styled from "@emotion/styled";
import { ComponentInput } from "../input/input";
import { NavLink } from "react-router-dom";

//#region
const NavStyled = styled.nav`
    position: relative;
    background-color: #ffffff;
    border-radius: 5px;
    top: -30px;
    min-height: 60px;
    padding: 12px ;
    /* z-index: 1; */
    margin: 0 60px;
    @media(max-width:768px){
      margin: 0 10px;
    }
    display: flex;
    align-items: center;
    gap: 15px 0;
    flex-wrap: wrap;
  `;

const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    @media(max-width:1000px){
      width: 100%;
    }
  `;

const ButtonStyled = styled.button`
    border: none;
    background-color: #0071E1;
    color: #ffffff;
    font-weight: bold;  
    border-radius: 5px; 
  `;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 100%;
  padding: 0;
`;

const MenuItemLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:bold;
  text-decoration: none;
  height: 100%;
  font-size: 1.1rem;
  cursor: pointer;
  color: #000000;
  transition: 0.3s ease-in-out;
  @media(max-width:500px){
    font-size: 12px;
  }

  &:hover {
    color: #07388d;
    text-decoration: none;
    div {
      svg {
        fill: #23394d;
      }
    }

 
  }`;

//#endregion

export function ComponentNavbar() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <NavStyled>
      <Container>
        <ComponentInput 
          placeholder="Ingresar nombre del producto"
        />
        <ButtonStyled>Buscar</ButtonStyled>
      </Container>
      <Container>
        <StyledList>
          <li><MenuItemLink>Comidas</MenuItemLink></li>
          <li><MenuItemLink>Accesorios</MenuItemLink></li>
          <li><MenuItemLink onClick={()=>scrollToSection('marcas')}>
            Marcas
          </MenuItemLink></li>
          <li><MenuItemLink>Medicamentos</MenuItemLink></li>
          <li><MenuItemLink>Ofertas</MenuItemLink></li>
        </StyledList>
      </Container>
    </NavStyled>
  )
}
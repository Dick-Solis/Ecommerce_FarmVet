import styled from "@emotion/styled";
import { ComponentInput } from "../input/input";
import { NavLink } from "react-router-dom";
import { CardSearchProduct } from "../cards/cardSearchProduct";
import { useState } from "react";
import { Spinner } from "../spinner/spiner";
import { searchProducts } from "../../services/productService";

//#region
const NavStyled = styled.nav`
    position: relative;
    background-color: #ffffff;
    border-radius: 5px;
    top: -30px;
    min-height: 60px;
    padding: 12px ;
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
    :nth-of-type(1){
      flex-direction: column;
    }
    @media(max-width:1000px){
      width: 100%;
    }
  `;

const ContainerSearchProducts = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 10px;
  z-index: 1;
  max-width: 500px;
  background: #0071E1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  height: 280px;
`;

const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 230px;
  overflow: auto;
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
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  function handleSearch(event){
    event.preventDefault();
    searchProducts(event.target.value)
    .then(response => {
      setSearchResults(response.data)
    })
  };

  return (
    <NavStyled>
      <Container>
        <ComponentInput
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleSearch} 
          placeholder="Ingresar nombre del producto"
        />
        {searchText.length > 0 && (
          <ContainerSearchProducts>
            <ContainerProducts>
              {<Spinner/> && searchResults.length > 0 ?(
                searchResults.map((product,index) =>
                  <CardSearchProduct product={product} key={index}/>
                )
              ):(
                <p>No se encontraron Resultados</p>
              )}
            </ContainerProducts>
            <p>ssssssssssssss</p>
          </ContainerSearchProducts>
        )}
        
      </Container>
      <Container>
        <StyledList>
          <li><MenuItemLink to={'/products'}>Comidas</MenuItemLink></li>
          <li><MenuItemLink to={'/products'}>Accesorios</MenuItemLink></li>
          <li><MenuItemLink to={'/products'}>Medicamentos</MenuItemLink></li>
          <li><MenuItemLink>Ofertas</MenuItemLink></li>
        </StyledList>
      </Container>
    </NavStyled>
  )
}
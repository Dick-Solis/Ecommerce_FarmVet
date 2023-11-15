import styled from "@emotion/styled";
import { ComponentInput } from "../input/input";
import { NavLink } from "react-router-dom";
import { CardSearchProduct } from "../cards/cardSearchProduct";
import { useEffect, useState } from "react";
import { searchProducts } from "../../services/productService";
import { SkeletonCard } from "../skeleton/skeletonCard";
import { productCategory } from "../../services/productService";
// import {ScrollAnimation} from "../scroll/scrollHorizontalInfinite";
// import Scroller from "../scroll/scrollHorizontalInfinite";
import { HorizontalInfinite } from "../scroll/scrollHorizontalInfinite";
//#region
const NavStyled = styled.nav`
    position: relative;
    background-color: #ffffff;
    border-radius: 5px;
    top: -30px;
    min-height: 60px;
    padding: 12px;
    width: 100%;
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
    width: 100%;
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
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
  background: #034a70; 
  border-radius: 6px;
  }
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
  font-family: 'Arial';
  font-size: 12px;
  cursor: pointer;
  color: #000000;
  transition: 0.3s ease-in-out;
  padding: 5px 10px;
  width: max-content;
  @media(max-width:768px){
    font-size: 12px;
  }
  `;


const MessageEmpty = styled.p`
  color: #ffffff;
  font-weight: bold;
`;


const StyledButton = styled(NavLink)`
  font-weight: bold;
  color: #ffffff;
  padding: 10px;
  border:none;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  background-color: red;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
  border: 1px solid #005183;
  border-radius: 5px;
  padding: 5px;
  gap: 3px;
`;

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
`;
//#endregion

export function ComponentNavbar() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeSkeletons, setActiveSkeletons] = useState(true);
  const [categories , setCategories] = useState([]);

  useEffect(()=>{
      productCategory()
        .then((response)=>(setCategories(response.data)))
  },[]);

  function handleSearch(event){
    event.preventDefault();
    searchProducts(event.target.value)
    .then(response => {
      setSearchResults(response.data)
      setActiveSkeletons(false);
    })
  };

  return (
    <NavStyled>
      <Container>
        <ComponentInput
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
          ancho="100%"
          onKeyUp={handleSearch} 
          placeholder="Ingresar nombre del producto"
        />
        {searchText.length > 0 && (
          <ContainerSearchProducts>
            <ContainerProducts>
            {activeSkeletons && <SkeletonCard alto="230px" ancho="300px"/>}
              {searchResults.length > 0 ?(
                searchResults.map((product,index) =>
                  <CardSearchProduct product={product} key={index}/>
                )
              ):(
                <MessageEmpty>No se encontraron Resultados</MessageEmpty>
              )} 
            </ContainerProducts>
            {searchResults.length > 3 && <StyledButton to={`/productsSearch/${searchText}`}>Más Resultados</StyledButton>}
          </ContainerSearchProducts>
        )}
        
      </Container>
      <Container>
        <HorizontalInfinite>
          {categories.map(category => (
            // <NavLink>
              <StyledLi key={category.id_categoria}>
                <NavLink  to={`/category/${category.id_categoria}`}>
                  <StyledImage src={category.imagen} alt={category.nombre}/>
                </NavLink>
                <MenuItemLink to={`/category/${category.id_categoria}`} >{category.nombre}</MenuItemLink>
              </StyledLi>
            // </NavLink>
          ))}
        </HorizontalInfinite>
      </Container>
    </NavStyled>
  )
}
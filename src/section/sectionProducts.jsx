import styled from '@emotion/styled';
import { CardProduct } from '../components/cards/cardProduct';
import { TitleSection } from '../components/Texts/text';
import { useEffect,useState } from 'react';
import { showAllProducts } from '../services/productService';

//#region
const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
  `;

const ContainerHeader = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
  `;

const ButtonStyled = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    :hover{
      background-color: #115f93;
    }
  `;

const ContainerScrolling = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 0 15px;
    gap: 15px;
    overflow-x: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    :-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 768px) {
    overflow-x: scroll;
    scrollbar-width: thin;
  }
  `;
//#endregion

export function SectionProducts() {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(()=>{
    showAllProducts()
    .then((response)=>setDataProducts(response.data));
  },[])

  const content = document.querySelector(".scrolling-container");
  function ButtonLeft() {
    content.scrollLeft -= 800;
  };

  function ButtonRight() {
    content.scrollLeft += 800;
  };  

  return (
    <ContainerCards>
      <ContainerHeader >
        <ButtonStyled onClick={ButtonLeft}>👈</ButtonStyled>
        <TitleSection>Productos</TitleSection>
        <ButtonStyled onClick={ButtonRight}>👉</ButtonStyled>
      </ContainerHeader>

      <ContainerScrolling className='scrolling-container'>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
      </ContainerScrolling>
    </ContainerCards>
  )
}
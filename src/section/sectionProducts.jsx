import styled from '@emotion/styled';
import { CardProduct } from '../components/cards/cardProduct';
import { TitleSection } from '../components/Texts/text';
import { useEffect, useState } from 'react';
import { showAllProducts } from '../services/productService';
import { useCart } from '../context/cartContext';
//#region
const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
  `;

const ContainerHeader = styled.section`
    display: flex;
    justify-content: space-between;
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
  const initialCart = JSON.parse(sessionStorage.getItem('dataProductsCart')) || [];
  const [productsCart, setProductsCart] = useState(initialCart);
  let { setCartItems } = useCart();

  useEffect(() => {
    sessionStorage.setItem('dataProductsCart', JSON.stringify(productsCart));        
    const TotalRefreshCart = JSON.parse(sessionStorage.getItem('dataProductsCart'));
    setCartItems(TotalRefreshCart.reduce((total, objeto) => total + objeto.cantidad, 0));
    showAllProducts()
    .then((response)=>setDataProducts(response.data));
  }, [productsCart]);

  const content = document.querySelector(".scrolling-container");

  function ButtonLeft() {
    content.scrollLeft -= 800;
  };

  function ButtonRight() {
    content.scrollLeft += 800;
  };


  function addProductCart(initialCart) {
    const updatedCart = [...productsCart];
    const existingProductIndex = updatedCart.findIndex((item) => item.id_producto === initialCart.id_producto);
    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].cantidad += 1;
    } else
      updatedCart.push({
        id_producto: initialCart.id_producto,
        cantidad: 1,
        nameProduct: initialCart.nombre,
        imagen: initialCart.imagen,
        precio: parseInt(initialCart.precio),
        descuento: parseInt(initialCart.descuento),
      });

    setProductsCart(updatedCart);
    const TotalProductCart = updatedCart.reduce((total, objeto) => total + objeto.cantidad, 0);
    setCartItems(TotalProductCart);
  }


  return (
    <ContainerCards>
      <ContainerHeader >
        <ButtonStyled onClick={ButtonLeft}>👈</ButtonStyled>
        <TitleSection>Productos</TitleSection>
        <ButtonStyled onClick={ButtonRight}>👉</ButtonStyled>
      </ContainerHeader>

      <ContainerScrolling className='scrolling-container'>
        {dataProducts.map(product => (
          <CardProduct key={product.id_producto}
            product={product}
            onClick={() => {
              addProductCart(product)
            }}/>
        ))}
      </ContainerScrolling>
    </ContainerCards>
  )
}
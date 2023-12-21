import styled from '@emotion/styled';
import { CardProduct } from '../components/cards/cardProduct';
import { TitleSection } from '../components/Texts/text';
import { useEffect, useState } from 'react';
import { showAllProducts } from '../services/productService';
import { useCart } from '../context/cartContext';
import { SkeletonCard } from '../components/skeleton/skeletonCard';
import Message from '../components/alert/messageProduct';

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
  const [activeData, setActiveData] = useState(false);
  let { setCartItems } = useCart();
  const arrayDeRepeticiones = new Array(10).fill(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('dataProductsCart', JSON.stringify(productsCart));
    const TotalRefreshCart = JSON.parse(sessionStorage.getItem('dataProductsCart'));
    setCartItems(TotalRefreshCart.reduce((total, objeto) => total + objeto.cantidad, 0));
    showAllProducts()
      .then((response) => {
        setDataProducts(response.data)
        setActiveData(true);
      });
  }, [productsCart]);

  const content = document.querySelector(".js-products");

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
        precio: (initialCart.precio),
        descuento: (initialCart.descuento),
        en_descuento: initialCart.en_descuento,
      });

    setProductsCart(updatedCart);
    const TotalProductCart = updatedCart.reduce((total, objeto) => total + objeto.cantidad, 0);
    setCartItems(TotalProductCart);
    setShowMessage(true);
  }

  const handleMessageClose = () => {
    setShowMessage(false);
  };

  return (
    <ContainerCards>
      <Message text="Se ha añadido un producto" show={showMessage} onClose={handleMessageClose} />
      <ContainerHeader >
        <ButtonStyled onClick={ButtonLeft}>👈</ButtonStyled>
        <TitleSection>Productos</TitleSection>
        <ButtonStyled onClick={ButtonRight}>👉</ButtonStyled>
      </ContainerHeader>

      {
        <ContainerScrolling className='js-products'>
          {activeData === false ? arrayDeRepeticiones.map((elemento, indice) => (
            <SkeletonCard key={indice} ancho='400px' alto='350px' />
          )) : 
            dataProducts.map(product => (
              <CardProduct key={product.id_producto}
                product={product}
                onClick={() => {
                  addProductCart(product)
                }}
              />
            ))
          }
        </ContainerScrolling>}
    </ContainerCards>
  )
}
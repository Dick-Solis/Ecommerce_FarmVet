import styled from '@emotion/styled';
import { CardProductCart } from '../components/cards/cardProductCart';
import { TitleSection } from '../components/Texts/text';
import { useState } from 'react';

//#region
  const SectionContent = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
  `;

  const SectionCardsCart = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 500px !important;
    gap: 20px;
  `;

  const SectionContentCart = styled.div`
    width: 300px;
    height: 200px;
    background-color: #ffffff;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 10px;
    color: #0071e1;
    gap: 20px;
    @media(max-width:600px){
      width: 85%;
    }
  `;

  const TitleCart = styled.h3`
    color: #0071e1;
  `;

  const ContentPrice = styled.div`
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 4px solid #0071e1; */
  `;

  const ButoonComprar = styled.button`
    background-color: #ff0000;
    padding: 10px;
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 10px;
  `;

  const StyledMount = styled.p`
    font-weight: bold;
  `;
//#endregion

export function SectionCartProduct({setHandleSection,productsCart,setProductsCart}){

  function TotalCart(){
    let TotalAmount = 0;
    for(const product of productsCart) {
      TotalAmount += product.cantidad * (product.precio - product.descuento);
    }
    return TotalAmount;
  }
  
  function handleClick(){
    setHandleSection(1)
  }
  return(
    <SectionContent>
      <SectionCardsCart>
        {
          productsCart.map((product,index) => (
            <CardProductCart 
              key={product.id_producto}
              product={product}
              setProductsCart={setProductsCart}
              productsCart={productsCart}
              index={index}
            />
          ))
        }
      </SectionCardsCart>
      {TotalCart() === 0 ? "":<SectionContentCart>
        <TitleCart>Resumen de Compra</TitleCart>
        <ContentPrice>
          <h4>Subtotal</h4>
          <StyledMount>S/{TotalCart()}.00</StyledMount>
        </ContentPrice>
        <ContentPrice>
          <h4>Total</h4>
          <StyledMount>S/{TotalCart()}.00</StyledMount>
        </ContentPrice>
        <ButoonComprar onClick={handleClick}>Ir a Comprar</ButoonComprar>
      </SectionContentCart>}
    </SectionContent>
  )
}

import styled from '@emotion/styled';
import { CardProductCart } from '../components/cards/cardProductCart';
import { useEffect, useState } from 'react';
// import Culqi from 'https://checkout.culqi.com/js/v4';

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
    height: 700px ;
    gap: 20px;
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-thumb {
      background: #034a70; 
      border-radius: 6px;
    }
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

export function SectionCartProduct({ setHandleSection, productsCart, setProductsCart }) {
  Culqi.publicKey = 'pk_test_b82c57f9c45befda';
  let buttonCulqi;

  function culqi() {
    if (Culqi.token) {  // ¡Objeto Token creado exitosamente!
      const token = Culqi.token.id;
      console.log('Se ha creado un Token: ', token);
      //En esta linea de codigo debemos enviar el "Culqi.token.id"
      //hacia tu servidor con Ajax
    } else if (Culqi.order) {  // ¡Objeto Order creado exitosamente!
      const order = Culqi.order;
      console.log('Se ha creado el objeto Order: ', order);

    } else {
      // Mostramos JSON de objeto error en consola
      console.log('Error : ',Culqi.error);
    }
    console.log("si se ejecuta culqi()");
  };
  
  useEffect(()=>{
    culqi();
    console.log("Este es Culqi", Culqi)
    console.log("hay un refreshing");
  },[])

  document.addEventListener('payment.success', function (event) {
    console.log('Pago exitoso', event.detail);
  });

  Culqi.options({
    style: {
      logo: 'https://res.cloudinary.com/dstzuz2wo/image/upload/v1699658527/recursos-grupo-rino/farmavet-app/pet-images/qpk5cqxeuuxqwie43yu9.png',
      bannerColor: '', // hexadecimal
      buttonBackground: '#0071e1', // hexadecimal
      menuColor: '#0071e1', // hexadecimal
      linksColor: '#0071e1', // hexadecimal
      buttonText: '', // texto que tomará el botón
      buttonTextColor: '#ffffff', // hexadecimal
      priceColor: '#0071e1' // hexadecimal
    }
  });

  function TotalCart() {
    let TotalAmount = 0;
    for (const product of productsCart) {
      product.en_descuento === 'SI' ? TotalAmount += product.cantidad * (product.precio - (product.precio * product.descuento/100)) :  TotalAmount += product.cantidad * product.precio;
    }
    return TotalAmount;
  }

  let TotalAmount = 0;
  for (const product of productsCart) {
    product.en_descuento === 'SI' ? TotalAmount += product.cantidad * (product.precio - (product.precio * product.descuento/100)) :  TotalAmount += product.cantidad * product.precio;
  }

  function handleClick(e) {
    console.log('esto sucede después de un click');
    Culqi.settings({
      title: 'Culqi Store',
      currency: 'PEN',
      amount: TotalAmount * 100,
      order: 'ord_live_0CjjdWhFpEAZlxlz',
    })
    Culqi.options({
      lang: "auto",
      installments: false,
      paymentMethods: {
        tarjeta: true,
        yape: true,
        bancaMovil: true,
        agente: true,
        billetera: true,
        cuotealo: true,
      },
    });
    Culqi.open();
    e.preventDefault();

    setTimeout(()=>{
      console.log('despues de 4 segundo');
      buttonCulqi = document.getElementById('culqi-js');
      setActiveModal(true);
    },3000)
  };
  
  

  // activeModal ? console.log(buttonCulqi): "";
  // console.log(buttonCulqi);

  return (
    <SectionContent>
      <SectionCardsCart>
        {
          productsCart.map((product, index) => (
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
      {TotalCart() === 0 ? "" : <SectionContentCart>
        <TitleCart>Resumen de Compra</TitleCart>
        <ContentPrice>
          <h4>Subtotal</h4>
          <StyledMount>S/{TotalCart()}</StyledMount>
        </ContentPrice>
        <ContentPrice>
          <h4>Total</h4>
          <StyledMount>S/{TotalCart()}</StyledMount>
        </ContentPrice>
        <ButoonComprar onClick={handleClick} id='btn_pagar'>
          Ir a Comprar
        </ButoonComprar>
      </SectionContentCart>}
    </SectionContent>
  )
}

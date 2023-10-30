import styled from '@emotion/styled';
import { CardProductCart } from '../components/cards/cardProductCart';

//#region
  const SectionContent = styled.section`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 500px;
    gap: 20px;
    padding: 10px;
  `;
//#endregion

export function SectionCartProduct({productsCart,setProductsCart}){
  return(
    <SectionContent>
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
      
    </SectionContent>
  )
}

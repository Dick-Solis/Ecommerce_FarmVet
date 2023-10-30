import styled from '@emotion/styled';
import {AiFillDelete} from 'react-icons/ai';

//#region
const CardProduct = styled.div`
    display: flex;
    background-color: #ffffff;
    color: #0071e1;
    padding: 10px;
    width: auto;
    border-radius: 15px;
    flex-wrap: wrap;
    gap: 10px;
  `;

const StyledImage = styled.img`
    width: 150px;
    height: 150px;
  `;

const ContentCard = styled.div`
  word-wrap: break-word;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  width: 150px;
  :nth-of-type(1){
    width: 150px;
  }
  
  @media(max-width: 530px){
    :nth-of-type(2){
      width: calc(100% - 160px);
    }
   :nth-of-type(3){
      border-top: 1px solid #00749b;
      flex-direction: row;
      width: 100%;
    }
  }
  `;

const TextProduct = styled.p`
  color: #00749b;
  font-weight: bold;
`;

const ConteinerControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledButoonControl = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 30px;
  height: 30px;
  background-color: #00749b;
  padding: 5px;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 50%;
`;

const ContentDelete = styled.div`
  text-align: right;
`;
//#endregion

export function CardProductCart({index,productsCart,setProductsCart,product}) {
  const StyledDelete = {
    color: 'red',
    fontSize: '45px',
    textAling: 'right',
  }

  function addProduct(index){
    const updatedCart = [...productsCart];
    updatedCart[index].cantidad += 1;
    setProductsCart(updatedCart);
  }

  function restProduct(index){
    const updatedCart = [...productsCart];
    if(updatedCart[index].cantidad <= 1){
      return;
    }else{
      updatedCart[index].cantidad -= 1;
      setProductsCart(updatedCart);
    } 
  }

  function deleteProduct(index){
    console.log(index);
    const newArrayProduct = productsCart.filter(item => productsCart.indexOf(item) !== index);
    setProductsCart(newArrayProduct);
  }

  return (
    <CardProduct>
      <ContentCard>
        <StyledImage src={product.imagen} alt="" />
        <TextProduct>{product.nameProduct}</TextProduct>
      </ContentCard>
      <ContentCard>
        <div>
          <h5>Precio</h5>
          {product.descuento ? <TextProduct><s>S/{product.precio}.00</s></TextProduct> : ""}
          <TextProduct>
            S/{product.precio - product.descuento}.00
          </TextProduct>
        </div>
        <div>
          <h5>Cantidad</h5>
          <ConteinerControls>
            <StyledButoonControl onClick={()=>restProduct(index)}>
              -
            </StyledButoonControl>
            <TextProduct>{productsCart[index] ? productsCart[index].cantidad : ""}</TextProduct>
            <StyledButoonControl onClick={()=>addProduct(index)}>+</StyledButoonControl>
          </ConteinerControls>
        </div>
      </ContentCard>
      <ContentCard>
        <div>
          <h5>Total</h5>
          <TextProduct>S/{productsCart[index]? productsCart[index].cantidad * (product.precio-product.descuento) : ""}.00</TextProduct>
        </div>
        <ContentDelete>
          <AiFillDelete style={StyledDelete} onClick={()=>deleteProduct(index)}/>
        </ContentDelete>
      </ContentCard>
    </CardProduct>
  )
}
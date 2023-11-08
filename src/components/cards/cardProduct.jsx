import styled from '@emotion/styled';
import { BsFillStarFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { NavLink,Link } from 'react-router-dom';

//#region
const CardContainer = styled.div`
    width: 250px;
    min-width: 250px;
    border-radius: 15px;
    background-color: #ffffff;
    display: flex;
    padding: 10px;
    gap: 10px;
    line-height: 15px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `;

const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDescount = styled.p`
  padding: 7px 10px;
  background-color: #0071E1;
  border-radius: 8px;
  font-weight: bold;
  color: #ffffff;
`;

const StyledHeart = styled(AiFillHeart)`
  font-size: 30px;
  color: #bab4b4;
`
const StyledImage = styled.img`
  position: relative;
  /* top: -30px; */
  width: 150px;
  height: auto;
`;

const StyledTitleProduct = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const ContentStars = styled.div`
  display: flex;
  gap: 7px;
`;

const ContentPrice = styled.div`
  display: flex;
  gap: 10px;
`;

const PriceDescount = styled.p`
  color: #0071E1;
  font-weight: bold;
`;

const Price = styled.p`
  color: #0071E1;
  font-weight: bold;
  /* font-size: 13px; */
`;

const StyledButton = styled.button`
  width: 70%;
  background-color: #0071e1;
  padding: 10px;
  border: none;
  font-weight: bold;
  color: #ffffff;
  border-radius: 7px;
  cursor: pointer;
`
//#endregion

export function CardProduct({...props}) {
  const product = props.product;
  const StyledStarCalificated = {
    color: 'gold',
    fontSize: '24px',
  }

  const StyledStar = {
    color: '#D5D5D5',
    fontSize: '24px',
  }
  const timesToRepeat = 3;
  const totalIcons = 5;

  const starIcons = Array.from({ length: timesToRepeat }, (_, index) => (
    <BsFillStarFill key={index} style={StyledStarCalificated} />
  ));

  const additionalIcons = Array.from({ length: totalIcons - timesToRepeat },
    (_, index) => (
      <BsFillStarFill key={index + timesToRepeat} style={StyledStar} />
    ));

  return (
    <CardContainer>
      <ContentHeader>
        {product.en_descuento != 'NO' && <StyledDescount>-{product.descuento * 100}%</StyledDescount>}
        <StyledHeart />
      </ContentHeader>
      <Link to={`/products/${product.id_producto}`}>
        <StyledImage src={product.imagen} alt={product.nombre}/>
      </Link>
      <StyledTitleProduct>{product.nombre}</StyledTitleProduct>
      {/* <ContentStars>
        {starIcons}{additionalIcons}
      </ContentStars> */}
      {/* <p>S/.{precio * (desceunto/100)}<s>Hello</s></p>  */}
      <ContentPrice>
        {product.en_descuento === 'SI' ? <Price><s>S/{product.precio}</s></Price> : <Price>S/{product.precio}</Price>}
        {product.en_descuento === 'SI' && <PriceDescount>S/{product.precio-(product.precio * product.descuento)}</PriceDescount>}
      </ContentPrice>

      <StyledButton onClick={props.onClick}>Comprar</StyledButton>
    </CardContainer>
  )
}
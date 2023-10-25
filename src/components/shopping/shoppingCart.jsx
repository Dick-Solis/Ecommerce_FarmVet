import styled from "@emotion/styled";
import { FaShoppingBag } from 'react-icons/fa';

//#region
const ContainerShopping = styled.div`
    position: fixed;
    bottom: 10px; 
    right: 10px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 40px;
    background-color: #ffffff;
    padding-left: 10px;
    color: #0071e1;
    /* @media(max-width: 768px) {
      left: 10px; 
      bottom: 50px;
    } */
  `;

  const StyledCount = styled.p`
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    position: relative;
    font-weight: bold;
    padding: 5px;
    border-radius: 50%;
    top: -10px;
    left: -10px;
    background-color: #0071e1;
    color: #ffffff;
    z-index: 12;
  `;
//#endregion

export function ShoppingCart() {
  return (
    <ContainerShopping>
      <FaShoppingBag/>
      <StyledCount>0</StyledCount>
    </ContainerShopping>
  )
}
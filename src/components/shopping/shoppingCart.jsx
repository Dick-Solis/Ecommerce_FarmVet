import styled from "@emotion/styled";
import { FaShoppingBag } from 'react-icons/fa';
import { useCart } from "../../context/cartContext";
import { NavLink } from "react-router-dom";

//#region
const ContainerShopping = styled(NavLink)`
    position: fixed;
    bottom: 10px; 
    right: 10px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    font-size: 70px;
    background-color: #008fdc;
    padding-left: 10px;
    color: #0e4967;
    cursor: pointer;
  `;

  const StyledCount = styled.p`
    font-size:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    position: relative;
    font-weight: bold;
    padding: 7px;
    border-radius: 50%;
    top: -10px;
    left: -10px;
    background-color: #0e4967;
    color: #ffffff;
    z-index: 12;
  `;
//#endregion

export function ShoppingCart() {
  const {cartItems} = useCart();

  return (
    <ContainerShopping to='/cartShopping'>
      <FaShoppingBag/>
      <StyledCount>{cartItems}</StyledCount>
    </ContainerShopping>
    )
  }
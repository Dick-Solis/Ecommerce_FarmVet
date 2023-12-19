import styled from "@emotion/styled";
import { useCart } from "../../context/cartContext";
import { NavLink } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useEffect} from "react";

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
    background-color: #0071e1;
    padding-left: 10px;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
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
    background-color: #ffffff;
    color: #0071e1;
    z-index: 12;
  `;
//#endregion

export function ShoppingCart() {
  const {cartItems} = useCart();
  let { setCartItems } = useCart();

  useEffect(() => {
    const TotalRefreshCart = JSON.parse(sessionStorage.getItem('dataProductsCart'));
    if(TotalRefreshCart){
      setCartItems(TotalRefreshCart.reduce((total, objeto) => total + objeto.cantidad, 0));
    }
  },[])

  return (
    <ContainerShopping to='/cartShopping'>
      <AiOutlineShoppingCart/>
      <StyledCount>{cartItems}</StyledCount>
    </ContainerShopping>
    )
  }
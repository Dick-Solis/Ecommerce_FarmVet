import styled from "@emotion/styled";
import {BiArrowBack} from 'react-icons/bi';
import { TitleSection } from "../components/Texts/text";
import { useState, useEffect } from "react";
import { SectionCartProduct } from "../section/sectionCartProduct";
import { ComponentFooter } from "../components/footer/footer";
import { NavLink } from "react-router-dom";
import { WindowAlert } from "../components/modal/modals";


//#region
  const ContainerPage = styled.main`
    min-width: 100%;
  `;

  const StyldHeader = styled.header`
    padding: 80px 20px 0 20px;
    display: flex;
    justify-content: space-between;
  `;

  const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:5px 10px;
    background-color: #0071E1;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    font-size: 15px;
    gap: 10px;
    cursor: pointer;
  `;

  const ContainerCart = styled.section`
    display: flex;
    margin-top: 20px;
    /* margin-bottom: 40px; */
    max-height: 1000px;
    width: 100%;
    
  `;

  const StyledNavLink = styled(NavLink)`
    text-decoration: none;
  `;
//#endregion

export function CartPage(){
  let dataProducts = JSON.parse(sessionStorage.getItem('dataProductsCart')) || [];
  const [productsCart, setProductsCart] = useState(dataProducts);
  const [handleSection, setHandleSection] = useState(0);

  useEffect(() => {
    dataProducts = JSON.parse(sessionStorage.getItem('dataProductsCart'));
    sessionStorage.setItem('dataProductsCart', JSON.stringify(productsCart));
  }, [productsCart]);


  function Section(){
    switch(handleSection) {
      case 0:
        return(
        <SectionCartProduct 
          setProductsCart={setProductsCart}
          productsCart={productsCart}
          setHandleSection={setHandleSection}
        />
        )
      default:
        break;
    }
  }

  const dataError = JSON.parse(localStorage.getItem('dataErrorModal'));
  const dataCorrect = JSON.parse(localStorage.getItem('dataCorrectModal'));

  function CloseAlert(){
    localStorage.removeItem('dataErrorModal');
    window.location.reload();
  }

  return(
  <main id="pageContentCart">
   {
    dataError && <WindowAlert
    heightAlertWindow="300px"
    widthAlertWindow="400px"
    CloseAlert={CloseAlert}
    >
      {dataError.message  || dataCorrect.data.outcome["merchant_message"]}
      {}
    </WindowAlert>
   }
    <StyldHeader>
      <TitleSection>
        Carrito de Compras
      </TitleSection>
      <StyledNavLink to='/'>
        <StyledButton>
          <BiArrowBack/>
          Seguir Comprando
        </StyledButton>
      </StyledNavLink>
    </StyldHeader>
    <ContainerCart>
      {Section()}
    </ContainerCart>
    <ComponentFooter/>
  </main>
  )
}
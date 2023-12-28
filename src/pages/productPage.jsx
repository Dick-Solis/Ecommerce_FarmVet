import styled from "@emotion/styled";
import { ComponentNavbar } from "../components/navbar/navbarHeader";
import { useEffect,useState } from "react";
import { getProductsCategory } from "../services/productService";
import {CardProduct} from "../components/cards/cardProduct";
import { ComponentFooter } from "../components/footer/footer";
import {TbPlayerTrackNextFilled} from 'react-icons/tb';
import {TbPlayerTrackPrevFilled} from 'react-icons/tb';
import { useParams } from "react-router-dom";
import { ShoppingCart } from "../components/shopping/shoppingCart";
import { useCart } from "../context/cartContext";
import Message from "../components/alert/messageProduct";

//#region
  const ContentPage = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
  `;

  const ContentCards = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    flex-wrap: wrap;
    padding: 5px;
  `;

  const ContentPagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin: 25px 0;
  `;

  const StyledTextPage = styled.h3`
    color: white;
    font-weight: bold;
    font-size: 30px;
  `;

  const StyledButton = styled.button`
    padding: 10px;
    background-color: #01657e;
    border: none;
    border-radius: 50%;
    color: #ffffff;
    font-size: 25px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  `;

const ContentNavbar = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  max-width: 1170px;
`;
//#endregion

export function ProductPage(){
  let [currentPage, setCurrentPage] = useState(1);
  const [initialData, setInitialData] = useState([]);
  const {idCategory} = useParams();
  const initialCart = JSON.parse(sessionStorage.getItem('dataProductsCart')) || [];
  const [productsCart, setProductsCart] = useState(initialCart);
  let  {setCartItems} = useCart();
  const [showMessage, setShowMessage] = useState(false);

  
  useEffect(()=>{
    sessionStorage.setItem('dataProductsCart', JSON.stringify(productsCart));
    const TotalRefreshCart = JSON.parse(sessionStorage.getItem('dataProductsCart'));
    setCartItems(TotalRefreshCart.reduce((total, objeto) => total + objeto.cantidad, 0));

    getProductsCategory(idCategory,currentPage)
    .then((response)=> setInitialData(response.data));
  },[idCategory,currentPage,productsCart]);


  function nextPage(){
    setCurrentPage(currentPage += 1);
  }

  function previusPage(){
    if (currentPage === 0 ){
      return;
    }
    setCurrentPage(currentPage -= 1);
  }

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
        precio:(initialCart.precio),
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
  return(
    <ContentPage>
      <ContentNavbar>
        <ComponentNavbar/>  
      </ContentNavbar>
      <Message text="Se ha añadido un producto" show={showMessage} onClose={handleMessageClose} />
      <ContentCards>
        {
          initialData.map((product,index) => (
            <CardProduct
              key={index}
              product={product}
              onClick={() => {
                addProductCart(product)
              }}
            />
          ))
        }
      </ContentCards>
      <ContentPagination>
        <StyledButton onClick={previusPage}><TbPlayerTrackPrevFilled/></StyledButton>
        <StyledTextPage>{currentPage}</StyledTextPage>
        <StyledButton onClick={nextPage}><TbPlayerTrackNextFilled/></StyledButton>
      </ContentPagination>
      <ComponentFooter/>
      <ShoppingCart/>
    </ContentPage>
  )
}
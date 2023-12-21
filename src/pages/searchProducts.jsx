import styled from "@emotion/styled";
import { ComponentFooter } from "../components/footer/footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchProducts } from "../services/productService";
import { CardProduct } from "../components/cards/cardProduct";
import { ShoppingCart } from "../components/shopping/shoppingCart";
import { useCart } from "../context/cartContext";
import Message from "../components/alert/messageProduct";

//#region
  const ContentPage = styled.main`
    padding-top: 70px;
  `;

  const ProductsSearch = styled.section`
    min-height:100vh;
    padding: 0 20px;
  `;

  const TitleSection = styled.h2`
    color: #ffffff;

  `;

  const ContainerProductPage = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 50px;
  `;
//#endregion

export function SearchPageProducts(){
  const {busqueda} = useParams();
  const [dataSearch,setDataSearch] = useState([]);
  const initialCart = JSON.parse(sessionStorage.getItem('dataProductsCart')) || [];
  const [productsCart, setProductsCart] = useState(initialCart);
  let { setCartItems } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(()=>{
    sessionStorage.setItem('dataProductsCart', JSON.stringify(productsCart));
    const TotalRefreshCart = JSON.parse(sessionStorage.getItem('dataProductsCart'));
    setCartItems(TotalRefreshCart.reduce((total, objeto) => total + objeto.cantidad, 0));
    searchProducts(busqueda)
    .then((response) => {
      setDataSearch(response.data)
    })
  },[productsCart])

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
        precio: (initialCart.precio),
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
      <Message text="Se ha añadido un producto" show={showMessage} onClose={handleMessageClose} />

      <ProductsSearch>
        <TitleSection>
          Búsqueda de {busqueda}:
        </TitleSection>
        <ContainerProductPage>
          {
            dataSearch.map((product,index) => (
              <CardProduct
                key={index}
                product={product}
                onClick={() => {
                  addProductCart(product)
                }}
              />
            ))
          }
        </ContainerProductPage>
      </ProductsSearch>
      <ShoppingCart/>
      <ComponentFooter/>
    </ContentPage>
  )
}
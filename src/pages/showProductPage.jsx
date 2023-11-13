import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { ComponentFooter } from "../components/footer/footer";
import {ImageZoom } from "../components/image/styledShowImage";
import { useEffect,useState } from "react";
import { showProductPage } from "../services/productService";
import { Accordion } from "../components/acordions/acordion";
import { ShoppingCart } from "../components/shopping/shoppingCart";
import { useCart } from "../context/cartContext";


//#region
const StyledPage = styled.main`

  `;

const ContainerPage = styled.section`
    min-height: 100vh;
    padding-top: 70px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

const ContainerDescription = styled.section`
  display: flex;
  gap: 0 50px;
  @media(max-width: 768px){
    flex-wrap: wrap;
  }
`;

const StyledTitle = styled.h2`
  margin-top: 30px;
  color: #ffffff;
  @media(max-width: 768px){
    margin-top: 0;
  }
`;

const ContainerDataDescription = styled.div`
  width: 50%;
  color: #ffffff;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media(max-width:768px){
    width: 100%;
    padding: 20px;
  }
`;

const ContainerPrice = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 20px;
  @media(max-width:768px){
    gap: 0 7px;
  }
`;

const PorcentajeDescuento = styled.h3`
  background-color: red;
  padding: 5px;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  background-color: #ff0000;
  border: none;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
`;

const StyleText = styled.p`
  font-weight: bold;
  color: #ffffff;
  word-wrap: break-word;
`;

//#endregion

export function ShowProductPage() {
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState([]);
  const [activeData,setActiveData] = useState(true);
  let { setCartItems } = useCart();
  const initialCart = JSON.parse(sessionStorage.getItem('dataProductsCart')) || [];
  const [productsCart, setProductsCart] = useState(initialCart);

  useEffect(() => {
    sessionStorage.setItem('dataProductsCart', JSON.stringify(productsCart));
    const TotalRefreshCart = JSON.parse(sessionStorage.getItem('dataProductsCart'));
    setCartItems(TotalRefreshCart.reduce((total, objeto) => total + objeto.cantidad, 0));
    showProductPage(id)
      .then((response) => {
        setActiveData(false)
        setDataProduct(response)
      });
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
        precio: parseInt(initialCart.precio),
        descuento: parseInt(initialCart.descuento),
        en_descuento: initialCart.en_descuento,
      });

    setProductsCart(updatedCart);
    const TotalProductCart = updatedCart.reduce((total, objeto) => total + objeto.cantidad, 0);
    setCartItems(TotalProductCart);
  }

  return (
    <StyledPage>
      <ContainerPage>
        <ContainerDescription>
          <ImageZoom image={dataProduct.imagen} activeData={activeData}/>
          <ContainerDataDescription>
            <StyledTitle>{dataProduct.nombre}</StyledTitle>
            <ContainerPrice>
              <h3>Precio:</h3>
              {dataProduct.en_descuento === "NO" ? <h3>S/{dataProduct.precio}</h3> : <h3><s>S/{dataProduct.precio}</s></h3> }
              {dataProduct.en_descuento === "SI" && <PorcentajeDescuento>-{parseInt(dataProduct.descuento)}%</PorcentajeDescuento>}
              {dataProduct.en_descuento === "SI" && <h3>S/{dataProduct.precio - ((dataProduct.descuento/100) * dataProduct.precio)}</h3>}
            </ContainerPrice>
            <StyledButton onClick={() => {
                  addProductCart(dataProduct)
                }}>
              Comprar
            </StyledButton>
            <div>
            <Accordion title="Descripción">
              <StyleText>{dataProduct.descripcion==="NULL" ? "No existe descripción para este producto": dataProduct.descripcion}</StyleText>
            </Accordion>
            <Accordion title="Características">
              <StyleText>Modelo: {dataProduct.modelo}</StyleText>
              <StyleText>Unidad de Medida: {dataProduct.unidad_de_medida}</StyleText>
              <StyleText>Marca: {dataProduct.marca}</StyleText>
              <StyleText>Código: {dataProduct.código_interno}</StyleText>
            </Accordion>
            </div>
          </ContainerDataDescription>
        </ContainerDescription>
      </ContainerPage>
      <ShoppingCart/>
      <ComponentFooter />
    </StyledPage>
  )
}
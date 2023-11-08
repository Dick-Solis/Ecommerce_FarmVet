import styled from "@emotion/styled";
import { ComponentFooter } from "../components/footer/footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchProducts } from "../services/productService";
import { CardProduct } from "../components/cards/cardProduct";

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

  useEffect(()=>{
    searchProducts(busqueda)
    .then((response) => {
      setDataSearch(response.data)
    })

  },[])

  return(
    <ContentPage>
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
              />
            ))
          }
        </ContainerProductPage>
      </ProductsSearch>
      <ComponentFooter/>
    </ContentPage>
  )
}
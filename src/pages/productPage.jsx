import styled from "@emotion/styled";
import { ComponentNavbar } from "../components/navbar/navbarHeader";
import { useEffect,useState } from "react";
import { showAllProducts } from "../services/productService";
import {CardProduct} from "../components/cards/cardProduct";
import { ComponentFooter } from "../components/footer/footer";
import {TbPlayerTrackNextFilled} from 'react-icons/tb';
import {TbPlayerTrackPrevFilled} from 'react-icons/tb';

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
    min-height: 900px;
    justify-content: center;
    align-items: center;
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
  width: 100%;
  max-width: 1170px;
`;
//#endregion

export function ProductPage(){
  let [currentPage, setCurrentPage] = useState(1);
  const [initialData, setInitialData] = useState([]);


  useEffect(()=>{
    showAllProducts(currentPage,10)
    .then(response => {
      setInitialData(response.data)
    });
  },[currentPage])


  function nextPage(){
    setCurrentPage(currentPage += 1);
  }

  function previusPage(){
    if (currentPage === 0 ){
      return;
    }
    setCurrentPage(currentPage -= 1);
  }

  return(
    <ContentPage>
      <ContentNavbar>
        <ComponentNavbar/>  
      </ContentNavbar>
      <ContentCards>
        {
          initialData.map((product,index) => (
            <CardProduct
              key={index}
              product={product}
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
    </ContentPage>
  )
}
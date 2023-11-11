import styled from "@emotion/styled";
import { Children } from "react";

//#region
  const StyledCardContact = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 250px;
    height: 150px;
    background-color: #ffffff;
    border-radius: 10px;
  `;

  const ImageStyled = styled.img`
    width: 80px;
    height: 80px;
  `;
//#endregion

function CardContact({children,image=""}){
  return(
    <StyledCardContact>
      <ImageStyled src={image}/>
      {children}
    </StyledCardContact>
  )
}

export default CardContact;
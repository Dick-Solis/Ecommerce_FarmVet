import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {  } from '../Texts/text';

//#region 
  const ContainerCard = styled.div`
    display: flex;
    background: white;
    width: 100%;
    width: 250px;
    gap: 5px;
    padding: 10px;
    border-radius: 10px;
  `;

  const StyledImage = styled.img`
    width: 50px;
    height: auto;
  `;

  const StyledNameProduct = styled.p`
    word-wrap: break-word;
    color: #0071e1;
    font-weight: 600;
  `;
//#endregion

export function CardSearchProduct({product}){
  return(
    <NavLink style={{textDecoration: 'none'}}>
    <ContainerCard>
      <StyledImage src={product.imagen} alt={product.nombre} />
      <StyledNameProduct>{product.nombre}</StyledNameProduct>
    </ContainerCard>
    </NavLink>
  )
}
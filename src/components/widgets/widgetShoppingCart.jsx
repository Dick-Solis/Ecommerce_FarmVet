import styled from '@emotion/styled';
import {BsFillCartFill} from 'react-icons/bs';
import {SiGoogleforms} from 'react-icons/si';
import {FaMoneyCheck} from 'react-icons/fa'

//#region
  const SectionIconsNavbar = styled.section`
    display: flex;
    gap: 10px;
  `;

  const ContentIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 2px;
  `;

  const IconFirst = styled(BsFillCartFill)`
    width: 100%;
    color: #ffffff;
    font-size: 35px;
    background-image: linear-gradient(90deg, red,red);
    background-size: 0% 4px;
    background-repeat: no-repeat;
    background-position: left bottom;
    font-weight: 900;
    transition: background-size 300ms ease-in-out;
    :hover{
      background-size: 100% 3px;
    }
  `;
//#endregion

export function WidgetShoppingCart(){


  return(
    <SectionIconsNavbar>
      <ContentIcon>
        <IconFirst/>
        <p>Carrito Compras</p>
      </ContentIcon>
      <ContentIcon>
        <SiGoogleforms/>
        <p>Carrito Compras</p>
      </ContentIcon>
      <ContentIcon>
        <FaMoneyCheck/>
        <p>Carrito Compras</p>
      </ContentIcon>
      
    </SectionIconsNavbar>
  )
}
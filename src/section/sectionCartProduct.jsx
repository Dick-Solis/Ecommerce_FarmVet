import styled from '@emotion/styled';
import { CardProductCart } from '../components/cards/cardProductCart';

//#region
  const SectionContent = styled.section`
    /* display: flex; */
    padding: 10px;
  `;
//#endregion

export function SectionCartProduct(){
  return(
    <SectionContent>
      <CardProductCart/>
    </SectionContent>
  )
}

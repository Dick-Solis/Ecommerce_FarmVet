import styled from '@emotion/styled';
import { useRef } from 'react';
import { TitleSection } from '../Texts/text';

//#region
const ContainerScrool = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContainerHeader = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
`;

const ButtonStyled = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    :hover{
      background-color: #115f93;
    }
  `;

const ContainerScrolling = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 0 15px;
  gap: 15px;
  overflow-x: auto;
  /* overflow-x: hidden;
  scroll-behavior: smooth; */
  :-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    overflow-x: scroll;
    scrollbar-width: thin;
  }
`;

//#endregion

export function ScrollHorizontal({ title,children, scrollAmount = 800 }) {
  const containerRef = useRef();
  const scroll = (amount) => {
    containerRef.current.scrollLeft += amount;
  };

  return (
    <ContainerScrool>
      {title && <ContainerHeader>
        <ButtonStyled onClick={() => scroll(-scrollAmount)}>👈</ButtonStyled>
        <TitleSection>{title}</TitleSection>
        <ButtonStyled onClick={() => scroll(scrollAmount)}>👉</ButtonStyled>
      </ContainerHeader>}
      <ContainerScrolling ref={containerRef} className='scrolling-container'>
        {children}
      </ContainerScrolling>
    </ContainerScrool>
  );
}

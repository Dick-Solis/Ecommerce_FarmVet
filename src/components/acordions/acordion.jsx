import React, { useState } from 'react';
import styled from '@emotion/styled';

//#region
const AccordionContainer = styled.div`
  /* border: 1px solid #ccc; */
  /* margin: 10px; */
  /* padding: 10px; */
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: #0071E1;
  padding: 10px;
`;

const AccordionContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 10px;
`;

const StyleTitle = styled.span`
  font-weight: bold;
  
`;
//#endregion
export const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        <StyleTitle>{title}</StyleTitle>
        <span>{isOpen ? '▲' : '▼'}</span>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{content}</AccordionContent>
    </AccordionContainer>
  );
};

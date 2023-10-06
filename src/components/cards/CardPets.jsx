import styled from '@emotion/styled';
import { BsFillSuitHeartFill } from 'react-icons/bs'

//#region
const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 250px;
    padding: 5px;
    border-radius: 15px 15px 0 0;
  `;

const StyledImage = styled.img`
    background-color: #EAD3C1;
    border-radius: 15px 15px 0 0;
  `;

const StyledIcon = styled(BsFillSuitHeartFill)`
  font-size: 50px;
  color: #ffffff;
  padding: 7px;
  border-radius: 50%;
  background-color: red;
  filter: brightness(4);
  transform: rotate(45deg);
`;

const ContainerHeart = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  top:-30px;
`;

const StyledTitle = styled.h2`
  text-align: center;
`;

const StyledDescription = styled.p`
  text-align: center;
`;
//#endregion

export function CardPets({imagen="",title="",description=""}) {


  return (
    <ContainerCard>
      <StyledImage src={imagen} />
      <ContainerHeart>
        <StyledIcon/>
      </ContainerHeart>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </ContainerCard>
  )
}
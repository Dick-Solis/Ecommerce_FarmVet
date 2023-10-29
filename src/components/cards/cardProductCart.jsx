import styled from '@emotion/styled';
import reptil from '../../assets/reptil.png'
import {AiFillDelete} from 'react-icons/ai';

//#region
const CardProduct = styled.div`
    display: flex;
    background-color: #ffffff;
    color: #0071e1;
    padding: 10px;
    width: auto;
    border-radius: 15px;
    flex-wrap: wrap;
    gap: 10px;
  `;

const StyledImage = styled.img`
    width: 150px;
    height: 200px;
  `;

const ContentCard = styled.div`
  word-wrap: break-word;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  width: 150px;
  :nth-of-type(1){
    width: 150px;
  }
  
  @media(max-width: 530px){
    :nth-of-type(2){
      width: calc(100% - 160px);
    }
   :nth-of-type(3){
      border-top: 1px solid #00749b;
      flex-direction: row;
      width: 100%;
    }
  }
  `;

const TextProduct = styled.p`
  color: #00749b;
  font-weight: bold;
`;

const ConteinerControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const StyledButoonControl = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 30px;
  height: 30px;
  background-color: #00749b;
  padding: 5px;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 50%;
`;

const ContentDelete = styled.div`
  text-align: right;
`;
//#endregion

export function CardProductCart() {
  const StyledDelete = {
    color: 'red',
    fontSize: '45px',
    textAling: 'right',
  }

  return (
    <CardProduct>
      <ContentCard>
        <StyledImage src={reptil} alt="" />
        <TextProduct>nameProducssssssss</TextProduct>
      </ContentCard>
      <ContentCard>
        <div>
          <h5>Precio</h5>
          <TextProduct>Descuento</TextProduct>
          <TextProduct>Precio Real</TextProduct>
        </div>
        <div>
          <h5>Cantidad</h5>
          <ConteinerControls>
            <StyledButoonControl>-</StyledButoonControl>
            <TextProduct>100</TextProduct>
            <StyledButoonControl>+</StyledButoonControl>
          </ConteinerControls>
        </div>
      </ContentCard>
      <ContentCard>
        <div>
          <h5>Total</h5>
          <TextProduct>Precio Total</TextProduct>
        </div>
        <ContentDelete>
          <AiFillDelete style={StyledDelete}/>
        </ContentDelete>
      </ContentCard>
    </CardProduct>
  )
}
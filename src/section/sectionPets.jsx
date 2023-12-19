import styled from '@emotion/styled';
import { CardPets } from '../components/cards/CardPets';
import Animals from '../data/animals';

//#region
  const SectionCardPets = styled.section`
    display: flex;
    overflow-x: auto;
    width: 100%;
    gap: 0 20px;
    white-space: nowrap;
    padding: 0 120px;
    @media(max-width:768px) {
      padding: 20px;
    }
  `;
//#endregion

export function SectionPets(){
  return(
    <SectionCardPets>
      {Animals.map(animal => (
        <CardPets 
          key={animal.id} 
          imagen={animal.imagen}
          title={animal.title} 
          description={animal.description}
        />
      ))}
    </SectionCardPets>
  )
}
import styled from "@emotion/styled";
import { Spinner } from "../spinner/spiner";

//#region
const SkelotonImage = styled.div`
  background-color: #0f958e; 
  border-radius: 4px;
  width: ${(props) => props.ancho};
  height: ${(props) => props.alto};;
  animation: loading 1.5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes loading {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.6;
    }
  }
`;
//#endregion

export function SkeletonCard({alto,ancho}){
  return(
    <SkelotonImage alto={alto} ancho={ancho}>
      <Spinner/>
    </SkelotonImage>
  )
}
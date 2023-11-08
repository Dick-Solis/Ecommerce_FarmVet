import styled from "@emotion/styled";
import { useRef } from 'react';
import { Spinner } from "../spinner/spiner";
import { SkeletonCard } from "../skeleton/skeletonCard";

//#region
const ContainerZoom = styled.div` 
  display: flex;
  justify-content: flex-end;
  width: 50%;
  @media(max-width:768px){
    width: 100%;
    justify-content: center;
    padding: 20px;
  }
`;

const StyledImage = styled.img`
  position: relative;
  overflow: hidden;
  display: block;
  width: 400px;
`;

const ZoomedArea = styled.div`
  position: absolute;
  width: 150px; /* Ajusta el tamaño de la imagen grande */
  height: 150px; /* Ajusta el tamaño de la imagen grande */
  border: 2px solid #ffffff;
  display: none;
  pointer-events: none; /* Evita interferencia con eventos de mouse */
`;

//#endregion
export function ImageZoom({ image,activeData }) {
  const smallImageRef = useRef(null);
  const zoomedAreaRef = useRef(null);

  function zoomIn(e) {
    const smallImage = smallImageRef.current;
    const zoomedArea = zoomedAreaRef.current;

    const rect = smallImage.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const zoomX = (x / smallImage.width) * 100; // Ajusta el valor de zoom según tus necesidades
    const zoomY = (y / smallImage.height) * 100; // Ajusta el valor de zoom según tus necesidades

    zoomedArea.style.display = "block";
    zoomedArea.style.left = `${e.clientX - 100}px`;
    zoomedArea.style.top = `${e.clientY - 100}px`;
    zoomedArea.style.backgroundImage = `url("${image}")`;
    zoomedArea.style.backgroundSize = `${smallImage.width * 2}px ${smallImage.height * 2}px`;
    zoomedArea.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
  }

  function zoomOut() {
    const zoomedArea = zoomedAreaRef.current;
    zoomedArea.style.display = "none";
  }

  return (
    <ContainerZoom>
      {activeData ? <SkeletonCard alto="500px" ancho="400px"/> :<StyledImage 
        src={image}
        alt=""
        onMouseEnter={zoomIn}
        onMouseMove={zoomIn}
        onMouseLeave={zoomOut}
        ref={smallImageRef}
      /> }
      <ZoomedArea ref={zoomedAreaRef}></ZoomedArea>
    </ContainerZoom>
  );
}

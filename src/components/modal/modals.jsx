import styled from "@emotion/styled";
import {AiFillCloseCircle} from "react-icons/ai";

export function WindowAlert({
  heightAlertWindow,
  widthAlertWindow,
  borderRadius,
  padding,
  children,
  desactive
}) {

  function CloseAlert(){
    desactive(false);
  }
  return (
    <BackgroundAlertWindow>
      <AlertWindow
        height={heightAlertWindow}
        width={widthAlertWindow}
        borderRadius={borderRadius}
        padding={padding}
      >
        <ContainerClose>
          <AiFillCloseCircle onClick={CloseAlert}/>
        </ContainerClose>
        {children}
      </AlertWindow>
    </BackgroundAlertWindow>
  );
}

const BackgroundAlertWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;
`;

const ContainerClose = styled.div`
  align-self: flex-end;
  font-size: 25px;
  color: #FF0000;
`;

const AlertWindow = styled.div`
  width: ${(props) => props.width || "600px"};
  height: ${(props) => props.height || "600px"};
  color: black;
  background-color: white;
  border-radius: ${(prop) => prop.borderRadius || "20px"};
  position: relative;
  padding: ${(prop) => prop.padding || "10px"};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: flex-start; */

`;
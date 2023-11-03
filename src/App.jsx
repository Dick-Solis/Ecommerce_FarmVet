import { ComponentNavbarHeader } from "./components/navbar/navbar"
import styled from "@emotion/styled";
import ImageContent from './assets/VETERINARIA.png';
import { MyRoutes } from "./routes/routes";

const ContainerApp = styled.main`
  background-image: url(${ImageContent});
  background-repeat: repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: contain;
  min-height: 100vh;
`;

function App() {
  return (
    <ContainerApp>
      <ComponentNavbarHeader />
      <MyRoutes/>
    </ContainerApp>
  )
}

export default App

import { ComponentNavbarHeader } from "./components/navbar/navbar"
import HomePage from "./pages/homePage"
import styled from "@emotion/styled";
import ImageContent from './assets/VETERINARIA.png';

const ContainerApp = styled.main`
  background-image: url(${ImageContent});
  background-repeat: repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: contain;
`;

function App() {
  return (
    <ContainerApp>
      <ComponentNavbarHeader />
      <HomePage />
    </ContainerApp>
  )
}

export default App

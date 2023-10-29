import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import { CartPage } from "../pages/cartPage";

export function MyRoutes(){
  return(
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cartShopping" element={<CartPage/>}/>
    </Routes>
  )
}
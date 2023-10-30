import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import { CartPage } from "../pages/cartPage";
import { ProductPage } from "../pages/productPage";

export function MyRoutes(){
  return(
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cartShopping" element={<CartPage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
    </Routes>
  )
}
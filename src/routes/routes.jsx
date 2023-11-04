import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import { CartPage } from "../pages/cartPage";
import { ProductPage } from "../pages/productPage";
import { Article } from "../pages/privacidadPage";
import { ShowProductPage } from "../pages/showProductPage";

export function MyRoutes(){
  return(
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cartShopping" element={<CartPage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path='/products/:id' element={<ShowProductPage/>}/>
      <Route path='/politicas_de_privacidad' element={<Article/>}/>
    </Routes>
  )
}
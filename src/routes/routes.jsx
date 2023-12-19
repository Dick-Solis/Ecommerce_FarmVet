import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import { CartPage } from "../pages/cartPage";
import { ProductPage } from "../pages/productPage";
import { Article } from "../pages/privacidadPage";
import { ShowProductPage } from "../pages/showProductPage";
import { SearchPageProducts } from "../pages/searchProducts";
import { ReclamacionesPage } from "../pages/reclamacionesPage";
export function MyRoutes(){
  return(
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cartShopping" element={<CartPage/>}/>
      <Route path="/category/:idCategory" element={<ProductPage/>}/>
      <Route path='/products/:id' element={<ShowProductPage/>}/>
      <Route path='/politicas_de_privacidad' element={<Article/>}/>
      <Route path='/productsSearch/:busqueda' element={<SearchPageProducts/>}/>
      <Route path='/reclamaciones' element={<ReclamacionesPage/>}/>
    </Routes>
  )
}
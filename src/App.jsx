import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FiltersProvider } from "./context/filters";
import { CartProvider } from "./context/cart";
import { SearchProvider } from "./context/search";
import { Home } from "./components/Home/Home";
import { Products } from "./components/Products/Products";
import { Favorite } from "./components/Favorite/Favorite";
import { Profile } from "./components/Profile/Profile";
import { Cart } from "./components/Cart/Cart";


export function App(){
  return (
    <FiltersProvider>
    <CartProvider>
    <SearchProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/favorites' element={<Favorite/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
    </SearchProvider>
    </CartProvider>
    </FiltersProvider>
  )
}
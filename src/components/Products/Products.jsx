import { Navbar } from "../Gral/Navbar/Navbar"
import { Footer } from "../Gral/Footer/Footer"
import { Drinks, Foods, Frozen } from './Categories/Categories'
import { BannerProducts, BannerFoods, BannerDrinks, BannerFrozen } from "../Gral/Banners/Banners"
import { Breadcrumbs } from "../Gral/Breadcrumbs/Breadcrumbs"

export function Products(){
  return (
    <>
    <Navbar />
    <BannerProducts />
    <BannerFoods />
    <Breadcrumbs text="Productos > Almacén" />
    <Foods />
    <BannerDrinks />
    <Breadcrumbs text="Productos > Bebidas" />
    <Drinks />
    <BannerFrozen />
    <Breadcrumbs text="Productos > Congelados" />
    <Frozen />
    <Footer />
    </>
  )
}
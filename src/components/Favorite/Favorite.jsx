import { Navbar } from '../Gral/Navbar/Navbar'
import { Footer } from '../Gral/Footer/Footer'
import imgFavorite from '/src/img/gral/page-in-construction.jpg'
export function Favorite() {
  return (
    <>
    <Navbar />
    <main className='container-favorite'>
      <figure>
        <img src={imgFavorite} alt="" />
      </figure>
    </main>
    <Footer />
    </>
  )
}
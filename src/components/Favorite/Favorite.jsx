import { Navbar } from '../Gral/Navbar/Navbar'
import { Footer } from '../Gral/Footer/Footer'

export function Favorite() {
  return (
    <>
    <Navbar />
    <main className='container-favorite'>
      <figure>
        <img src="../src/img/gral/page-in-construction.jpg" alt="" />
      </figure>
    </main>
    <Footer />
    </>
  )
}
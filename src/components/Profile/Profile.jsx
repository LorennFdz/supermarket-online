import { Navbar } from '../Gral/Navbar/Navbar'
import { Footer } from '../Gral/Footer/Footer'



export function Profile() {
  return (
    <>
    <Navbar />
    <main className='container-profile'>
      <figure>
        <img src="../src/img/gral/page-in-construction.jpg" alt="" />
      </figure>
    </main>
    <Footer />
    </>
  )
}
import { Navbar } from '../Gral/Navbar/Navbar'
import { Footer } from '../Gral/Footer/Footer'
import imgProfile from '/src/img/gral/page-in-construction.jpg'


export function Profile() {
  return (
    <>
    <Navbar />
    <main className='container-profile'>
      <figure>
        <img src={imgProfile} alt="" />
      </figure>
    </main>
    <Footer />
    </>
  )
}
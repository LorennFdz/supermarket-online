import { Navbar } from '../Gral/Navbar/Navbar'
import { useCart } from '../../hooks/useCart';
import { IconEmptyCart } from '../Icons/Icons';
import { Footer } from '../Gral/Footer/Footer';
import './cart.css'
import { BannerCart } from "../Gral/Banners/Banners";
import { ModalCartItem } from './ModalCart';

export function Cart(){

  const { cart, addToCart, subtractQuantity, removeFromCart } = useCart();
  const totalCart = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0.0).toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });
  return (
    <>
    <Navbar />
    <section>
      <BannerCart />
    </section>
    <section className='content-buy-cart content-cart'>
      {cart.length === 0 ? (
        <section className='empty-my-cart'>
        <figure className='empty-my-cart-img'>
          <IconEmptyCart />
        </figure>
        <article className='empty-my-cart-text'>
          <h1>Tu carrito está vacío</h1>
          <span>Aún no tienes artículos en tu carrito de compra</span>
        </article>
      </section>
      ) :
      <>
      <ul className='cart-list'>
      {cart.map(item => (
            // separe el item del carrito y le paso todas las funciones del provider
            // y tambien el itemCart ( que es el producto completo )
          <ModalCartItem 
            key={item.id}
            subtractQuantity={() => subtractQuantity(item)}
            addToCart={() => addToCart(item)}
            removeFromCart={() => removeFromCart(item)}
            {... item}
          />
          ))}
      </ul>
      <section className='cart-total'>
        <h3 className='title-cart-total'>Total del carrito</h3>
        <article className='text-cart-total'>
          <strong>Total: </strong>
          <strong>{totalCart}</strong>
        </article>
      </section>
      <button className='btn-buy-cart'>
        Comprar
      </button>
    </>}
    </section>
    <Footer />
    </>
  )
}
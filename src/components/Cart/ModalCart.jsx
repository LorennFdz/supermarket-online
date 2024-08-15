import { Link } from 'react-router-dom'
import './modal-cart.css'
import { useCart } from '../../hooks/useCart'
import { IconCloseModalCart, IconEmptyCart, IconTrash } from '../Icons/Icons'
import iconMyCart from '/src/icons/my-cart.svg'

export function ModalCartItem({ image, title, brand, price, quantity, subtractQuantity, addToCart, removeFromCart }) {
  return (
    <li>
      <figure className='img-product-cart'>
        <img
          src={image}
          alt={title}
        />
      </figure>
      <article className='title-prod-cart'>
        <h3>{title}</h3>
        <strong>{brand}</strong>
      </article>
      <strong className='price-prod-cart'>$ {price}</strong>
      <article className='quantity-prod-cart'>
        <button
          className='minus-button'
          onClick={subtractQuantity}
        >-</button>
        <strong>{quantity}</strong>
        <button
          className='more-button'
          onClick={addToCart}
        >+</button>
      </article>
      <figure className='icon-trash' onClick={removeFromCart}>
        <IconTrash />
      </figure>
    </li>
  )
}

export function ModalCart({ openModalCart, handleModalCart }) {

  const { cart, addToCart, removeFromCart, subtractQuantity, clearCart } = useCart()

  const totalCart = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0.0).toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });
  
  return (
    <>
    <aside className={openModalCart ? 'modal-cart open' : 'modal-cart'}>
      <header className='header-cart'>
        <section className='my-cart'>
          <figure>
            <img src={iconMyCart} alt="" />
          </figure>
          <h1>Mi Carrito</h1>
        </section>
        <figure
          onClick={handleModalCart}
          className='close-my-cart'
        >
          <IconCloseModalCart />
        </figure>
      </header>
      <section className="content-cart">
      {cart.length !== 0 ? 
        <ul>
          {cart.map(itemCart => (
            // separe el item del carrito y le paso todas las funciones del provider
            // y tambien el itemCart ( que es el producto completo )
          <ModalCartItem
            key={itemCart.id}
            subtractQuantity={() => subtractQuantity(itemCart)}
            addToCart={() => addToCart(itemCart)}
            removeFromCart={() => removeFromCart(itemCart)}
            {... itemCart}
            
            />
          ))}
        </ul> :
        <section className='empty-my-cart'>
          <figure className='empty-my-cart-img'>
            <IconEmptyCart />
          </figure>
          <article className='empty-my-cart-text'>
            <h1>Tu carrito está vacío</h1>
            <span>Aún no tienes artículos en tu carrito de compra</span>
          </article>
        </section>
      }
      </section>
      { cart.length > 0 ? (
        <footer className='footer-cart'>
          <h3>Total: {totalCart}</h3>
          <section className='buttons-footer'>
            <button className='empty-cart' onClick={() => clearCart()}>Vaciar Carrito</button>
            <button
              className='buy-cart'
              disabled={cart.length === 0 ? true : false}
            >
              <Link to={"/cart"} className='finished-buy-anchor'>
                 Finalizar Compra
              </Link>
            </button>
          </section>
        </footer>
      ) : ''}
    </aside>
    </>
  )
}
/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react"
import "./product.css"
import { useCart } from "../../../hooks/useCart";
import { IconArrowCircleLeft, IconArrowCircleRight, IconFillHeartFavorite, IconHeartFavorite, IconMyCart2, IconMyCartProduct } from "../../Icons/Icons";
import { usePagination } from "../../../hooks/usePagination";

// ✅ Funciones de ayuda puras (reciben los datos por parámetro)
export function checkProductInCart(product) {
  const { cart } = useCart();
  return cart.some(item => item.id === product.id)
}

export function checkProductFavorite(product, favorites = []) {
  return favorites.some(item => item.id === product.id)
}

export function ProductItem({ image, title, description, price, isProductFavorite, isProductInCart, removeFromCart, addToCart }) {
  return (
    <li>
      <figure>
        <img src={image} alt={description} />
      </figure>
      <article className="text-product">
        <span>${price}</span>
        <h3>{title}</h3>
      </article>
      <article className="btns-product">
        <button
          title='Agregar a favoritos'
          className={isProductFavorite ? "btn-heart-product enable" : "btn-heart-product"}
        >
          {isProductFavorite ? <IconFillHeartFavorite /> : <IconHeartFavorite />}
        </button>
        <button
          title='Agregar al carrito'
          className="btn-addToCart"
          onClick={isProductInCart ? removeFromCart : addToCart}
        >
          {isProductInCart ? <IconMyCart2 /> : <IconMyCartProduct />}
        </button>
      </article>
      {isProductInCart && (
        <article className="span-addToCart">
          <span>Agregado al carrito</span>
        </article>
      )}
    </li>
  )
}

export function Product({ products }) {
  const { filteredProducts } = products;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [productsByPage, setProductsByPage] = useState(innerWidth < 500 ? 4 : innerWidth < 1439 ? 8 : 10)
  const { currentPage, setCurrentPage } = usePagination();

  // ✅ Obtenemos el carrito una sola vez aquí (NIVEL SUPERIOR)
  const { cart, addToCart, removeFromCart } = useCart();
  // Supongamos que tienes un hook de favoritos similar:
  // const { favorites } = useFavorite(); 

  let startIndex = ((currentPage - 1) * productsByPage)
  let endIndex = (startIndex + productsByPage);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setInnerWidth(width);
      setProductsByPage(width < 500 ? 4 : width < 1439 ? 8 : 10)
    };
    window.addEventListener('resize', handleResize);
    setCurrentPage(1);
    return () => window.removeEventListener('resize', handleResize); // Limpieza de evento
  }, [filteredProducts]);

  const quantityPages = Math.ceil(filteredProducts.length / productsByPage);
  const productsContainerRef = useRef(null);

  return (<>
    <section className="hidden" ref={productsContainerRef}></section>
    <section className="products">
      <ul className="products-list">
        {filteredProducts.slice(startIndex, endIndex).map(product => {
          // ✅ Pasamos el 'cart' a la función para evitar el error de Hooks
          const isProductInCart = checkProductInCart(product, cart)
          const isProductFavorite = false; // Ajustar cuando tengas favoritos

          return (
            <ProductItem
              key={product.id}
              isProductFavorite={isProductFavorite}
              isProductInCart={isProductInCart}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          )
        })}
      </ul>
      {filteredProducts.length === 0 && <p className="null-products-text">No hay productos para mostrar</p>}

      {quantityPages > 1 && (
        <article className="pagination">
          <button
            title='Página anterior'
            className={currentPage === 1 ? "btn-pagination disable" : "btn-pagination"}
            disabled={currentPage === 1}
            onClick={() => {
              productsContainerRef.current.scrollIntoView({ behavior: "smooth" })
              setCurrentPage(currentPage - 1)
            }}
          >
            <IconArrowCircleLeft />
          </button>
          <input title='Página actual' type="text" className="input-pagination" value={currentPage} readOnly />
          <button
            title='Página siguiente'
            className={currentPage === quantityPages ? "btn-pagination disable" : "btn-pagination"}
            disabled={currentPage === quantityPages}
            onClick={() => {
              productsContainerRef.current.scrollIntoView({ behavior: "smooth" })
              setCurrentPage(currentPage + 1)
            }}
          >
            <IconArrowCircleRight />
          </button>
        </article>
      )}
    </section>
  </>)
}
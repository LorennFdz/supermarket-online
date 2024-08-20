import { checkProductFavorite, checkProductInCart } from "../../Gral/Product/Product"
import { products } from "../../../mocks/products.json"
import { useCart } from "../../../hooks/useCart"
import { ProductItem } from "../../Gral/Product/Product"
import './categories.css'
import { useSlider } from "../../../hooks/useSlider"
import { QuantityProducts } from "../../Gral/QuantityProducts/QuantityProducts"
import imgFoodsPublicity from '/src/img/products/publicity/foods-recorted.jpg'
import imgFoodsPublicity2 from '/src/img/products/publicity/foods-2-recorted.jpg'
import imgDrinksPublicity from '/src/img/products/publicity/coke-cola-recorted.jpg'
import imgDrinksPublicity2 from '/src/img/products/publicity/corona-recorted.jpg'
import imgFrozenPublicity from '/src/img/products/publicity/frozen-recorted.jpg'
import imgFrozenPublicity2 from '/src/img/products/publicity/frozen-2-recorted.jfif'
export function Foods() {
  const categoryFoods = products.filter((prod) => prod.category === 'Almacen')

  const { addToCart, removeFromCart } = useCart();
  const { startIndex, endIndex, btnLeft, btnRight } = useSlider(categoryFoods)
  return (
    <>
    <section className="category-drinks">
      <section className="publicity-drinks">
        <img src="/img/products/publicity/foods-recorted.jpg" alt="Publicidad" />
      </section>
      <section className="products-page">
        <article className="header-products-page">
          <QuantityProducts array={categoryFoods} text="productos" />
        </article>
        <ul className="products-list slider-items">
          {categoryFoods.slice(startIndex, endIndex).map(product => {
            const isProductInCart = checkProductInCart(product)
            const isProductFavorite = checkProductFavorite(product)
            return (
              <ProductItem 
                key={product.id}
                isProductFavorite={isProductFavorite}
                isProductInCart={isProductInCart}
                addToCart={() => addToCart(product)}
                removeFromCart={() => removeFromCart(product)}
                {... product}
              />
            )
          })}
        {btnLeft()}
        {btnRight()}
        </ul>
      </section>
      <section className="publicity-drinks">
        <img src="/img/products/publicity/foods-2-recorted.jpg" alt="Publicidad" />
      </section>
    </section>
    </>
  )
}

export function Drinks() {
  const categoryDrinks = products.filter((prod) => prod.category === 'Bebidas')
  const { addToCart, removeFromCart } = useCart();
  const {startIndex, endIndex, btnLeft, btnRight} = useSlider(categoryDrinks)

  return (
    <>
    <section className="category-drinks">
      <section className="publicity-drinks">
        <img src="/img/products/publicity/coke-cola-recorted.jpg" alt="Publicidad" />
      </section>
      <section className="products-page">
        <article className="header-products-page">
          <QuantityProducts array={categoryDrinks} text="productos" />
        </article>
        <ul className="products-list slider-items">
        {categoryDrinks.slice(startIndex, endIndex).map(product => {
          const isProductInCart = checkProductInCart(product)
          const isProductFavorite = checkProductFavorite(product)
          return (
            <ProductItem 
              key={product.id}
              isProductFavorite={isProductFavorite}
              isProductInCart={isProductInCart}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {... product}
            />
          )
        })}
        {btnLeft()}
        {btnRight()}
        </ul>
      </section>
      <section className="publicity-drinks">
        <img src="/img/products/publicity/corona-recorted.jpg" alt="Publicidad" />
      </section>
    </section>
    </>
  )
}

export function Frozen() {
  const categoryFrozen = products.filter((prod) => prod.category === 'Congelados')

  const { addToCart, removeFromCart } = useCart();
  const {startIndex, endIndex, btnLeft, btnRight} = useSlider(categoryFrozen)

  return (
    <>
    <section className="category-drinks">
      <section className="publicity-drinks">
        <img src="/img/products/publicity/frozen-recorted.jpg" alt="Publicidad" />
      </section>
      <section className="products-page">
        <article className="header-products-page">
          <QuantityProducts array={categoryFrozen} text="productos" />
        </article>
        <ul className="products-list slider-items">
        {categoryFrozen.slice(startIndex, endIndex).map(product => {
          const isProductInCart = checkProductInCart(product)
          const isProductFavorite = checkProductFavorite(product)
          return (
            <ProductItem 
              key={product.id}
              isProductFavorite={isProductFavorite}
              isProductInCart={isProductInCart}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {... product}
            />
          )
        })}
        {btnLeft()}
        {btnRight()}
        </ul>
      </section>
      <section className="publicity-drinks">
        <img src="/img/products/publicity/frozen-2-recorted.jfif" alt="Publicidad" />
      </section>
    </section>
    </>
  )
}
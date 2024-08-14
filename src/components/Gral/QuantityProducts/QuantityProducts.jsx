import './quantityproducts.css'
export function QuantityProducts({array, text}){
  return <span className="quantity-products">{array.length} {text}</span>
}
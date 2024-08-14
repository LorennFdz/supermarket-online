import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const { state, addToCart, subtractQuantity, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      subtractQuantity,
      removeFromCart,
      clearCart
    }}>
      { children }
    </CartContext.Provider>
  )
}
import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart() {
  const context = useContext(CartContext)

  if(context === undefined)
    throw new Error('Estás utilizando este custom Hook en una parte de la aplicación que no está envuelta con el provider.')
  
  return context
}
import { useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cartReducer";
import { CART_ACTIONS_TYPES } from "../reducers/cartReducer";
export function useCartReducer() {
    // el dispatch es la funcion que se va a encargar de enviarle las acciones al reducer
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    // addToCart le llega el producto, dispatch es la acción a realizar
    const addToCart = (product) => dispatch({
      // type es AGREGAR AL CARRITO
      type: CART_ACTIONS_TYPES.ADD_TO_CART,
      // payload EL OBJETO EN SI
      payload: product
    })
  
    const subtractQuantity = (product) => dispatch({
      type: CART_ACTIONS_TYPES.SUBTRACT_QUANTITY,
      payload: product
    })
     
    const removeFromCart = (product) => dispatch({
      type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
      payload: product
    })
  
    const clearCart = () => dispatch({
      type: CART_ACTIONS_TYPES.CLEAR_CART,
    })
  
    return { state, addToCart, subtractQuantity, removeFromCart, clearCart }
  }
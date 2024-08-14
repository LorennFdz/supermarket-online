// necesitamos crear un estado inicial para el useReducer
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    SUBTRACT_QUANTITY: 'SUBTRACT_QUANTITY',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
}

// actualizar el local storage con el estado del carrito.
export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
} 

// reducer recibe un estado y una accion a realizar
export const cartReducer = (state, action) => {
  // type sería el string para identificar la acción a realizar y el payload es todo el objeto
  // que necesitamos para actualizar el estado.
  // en el payload vamos a tener el producto que vamos a añadir, por lo tanto tenemos todas sus caracteristicas.
  const { type: actionType, payload: actionPayload = {} } = action;
  const { id } = actionPayload; 
  // si el producto está en el carrito.
  const productInCart = state.findIndex(item => item.id === id)
  switch(actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      // structuredClone hace una copia profunda de lo que le pases, en este caso el carrito.
      // Ya que no se pueden mutar los estados, entonces se hace una copia y manejamos un carrito nuevo.
      if(productInCart >= 0){
        const newState = structuredClone(state)
        newState[productInCart].quantity += 1;
        updateLocalStorage(newState)
        return newState;
      }

      // si el producto no está en el carrito:
      const newState = [
        ...state,
          {
            ...actionPayload, // sería el producto
            quantity: 1
          }
        ]

        updateLocalStorage(newState)
        return newState
    }
    case CART_ACTIONS_TYPES.SUBTRACT_QUANTITY: {
      const newState = structuredClone(state);
      // Solo decrementa la cantidad si es mayor a 1
      if (newState[productInCart].quantity > 1) {
          newState[productInCart].quantity -= 1;
      }
      updateLocalStorage(newState)
      return newState;
    }
    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    case CART_ACTIONS_TYPES.CLEAR_CART:{
      updateLocalStorage([])
      return [];
    }
  }
  return state
}
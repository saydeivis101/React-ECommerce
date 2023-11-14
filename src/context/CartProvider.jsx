import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducer/cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const ADD_TO_CART = product => dispatch({
    type: "ADD_TO_CART",
    payload: product
  })

  const sumQuantities = (state)=>{
   return state?.reduce((accum, item)=> accum +item.quantity, 0);
  }

  const REMOVE_FROM_CART = product => dispatch({
    type: "REMOVE_FROM_CART",
    payload: product
  })

  return (
    <CartContext.Provider
      value={{
        cart: state,
        ADD_TO_CART,
        REMOVE_FROM_CART,
        sumQuantities,
      }}
    >
      {children}
    </CartContext.Provider>
  )}



import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'

export const ProductItem = ({product}) => {

    const {ADD_TO_CART, REMOVE_FROM_CART} = useContext(CartContext);

    return (
    <li key={product.id}>
            <picture>
              <img src={product.thumbnail} alt={product.title} />
            </picture>

            <h3>{product.title}</h3>

            <small>Price: ${product.price}</small>

            <button onClick={()=>ADD_TO_CART(product)}>Buy</button>
   </li>
  )
}

import React, { useContext, useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductItem } from '../products/ProductItem';
import { CartContext } from '../../context/CartProvider';
import { DisplayCartComponent } from './DisplayCartComponent';


export const CartComponent = () => {

  const shoppingCartIcon = useId();
  const {cart, sumQuantities} = useContext(CartContext);

  const quantities = sumQuantities(cart);

  return (
    
    <div className="shopping-cart">
      <label className='shopping-cart-label' htmlFor={shoppingCartIcon}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <strong className={(quantities)?'quantities':'no-items-in-cart'}>{quantities}</strong>
      </label>

      <input className='carCheckboxInput' type="checkbox" 
      name="" 
      id={shoppingCartIcon}
      hidden />

      <aside className="shopping-cart-display">
        <h4>Shopping Cart</h4>
        <DisplayCartComponent/>

      </aside>
    </div>
  )
}

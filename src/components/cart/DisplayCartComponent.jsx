import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

export const DisplayCartComponent = () => {
  const { cart, ADD_TO_CART, REMOVE_FROM_CART } = useContext(CartContext);

  return (
    <>
      {(cart.length>0)? (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <picture>
                <img src={product.thumbnail} alt={product.title} />
              </picture>

              <h3>{product.title}</h3>

              <h4>Price: ${product.price}</h4>

              <h4>
                Quantity: {product.quantity}
              </h4>

              <button onClick={() => ADD_TO_CART(product)}>+</button>

              <button onClick={()=>REMOVE_FROM_CART(product)}>
                -
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <strong>There's not Products Yet :/</strong>
      )}
    </>
  );
};

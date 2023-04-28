import React, { useContext } from "react";
import { ShopContext } from "../MockListings/mock-shop-context";

export const CartItem = (props) => {
  const { id, itemName, itemPrice, itemImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={itemImage} />
      <div className="description">
        <p>
          <b>{itemName}</b>
        </p>
        <p> Price: ${itemPrice}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};


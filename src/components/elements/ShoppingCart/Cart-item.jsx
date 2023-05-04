import { useContext } from "react";
import React from "react";
import { ShopContext } from "../ItemShop/Shop-context";

export const CartItem = (props) => {
  const { id, itemName, itemPrice, itemImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={itemImage} alt={itemName} />
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

/*

import React from "react";

export const CartItem = (props) => {
  return (
    <div className="cartItem">
      <img src={props.itemImage} alt={props.itemName} />
      <div className="description">
        <p>
          <b>{props.itemName}</b>
        </p>
        <p> Price: ${props.itemPrice}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(props.id)}> - </button>
        </div>
      </div>
    </div>
  );
};

function removeFromCart() {
  console.log("removed");

*/

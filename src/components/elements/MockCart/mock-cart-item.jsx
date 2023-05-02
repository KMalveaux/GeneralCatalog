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
}

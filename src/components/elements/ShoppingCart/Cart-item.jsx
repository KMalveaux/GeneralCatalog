import React from "react";
import axios from "axios";

/*
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
*/

const getImage = (path) => {
  return path.split("/").slice(-1);
};

const CartItem = (props) => {
  const removeFromCart = () => {
    console.log("Attempting to delete: " + props.id);
    axios
      .delete("http://localhost:5000/RemoveFromCart", {
        data: { id: props.id },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("http://localhost:5000/ShowCart")
      .then((res) => {
        console.log("Cart Data: ");
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRemoval = () => {
    props.removeListing(props.id);
  };

  return (
    <div className="cartItem">
      <img
        src={require("../../images/" +
          getImage(props.itemImage.replace(/\\/g, "/")))}
        alt={props.itemName}
      />
      <div className="description">
        <p>
          <b>{props.itemName}</b>
        </p>
        <p> Price: ${props.itemPrice}</p>
        <div className="countHandler">
          <button
            onClick={() => {
              removeFromCart();
              handleRemoval();
            }}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

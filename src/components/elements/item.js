import React, { useContext } from "react";
import { ShopContext } from "./ItemShop/shop-context";
import "./ItemShop/ItemShop.css";

export const Item = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[props.id];

  const getImage = (path) => {
    console.log(path.split("/").slice(-1));
    return path.split("/").slice(-1);
  };

  return (
    <div className="itemProp">
      <img
        src={require(`../images/` +
          getImage(props.itemImage.replace(/\\/g, "/")))}
        alt={props.itemName}
      />
      <div className="description">
        <p className="item-name">
          <b>{props.itemName}</b>
        </p>
        <p className="item-price"> ${props.itemPrice}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(props.id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

export default Item;
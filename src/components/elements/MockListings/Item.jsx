import React, { useContext } from "react";
import { ShopContext } from "./shop-context";


export const Item = (props) => {
  const { id, itemName, itemPrice, itemImage } = props;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="itemProp">
      <img src={itemImage} alt={itemName} />
      <div className="description">
        <p className="item-name">
          <b>{itemName}</b>
        </p>
        <p className="item-price"> ${itemPrice}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

export default Item;

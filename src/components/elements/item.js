import React from "react";
import axios from "axios";
import "./ItemShop/ItemShop.css";

export const Item = (props) => {
  const getImage = (path) => {
    return path.split("/").slice(-1);
  };

  return (
    <div className="itemProp">
      <img
        src={require(`../images/` +
          getImage(props.itemImage.replace(/\\/g, "/")))}
        alt={props.itemName}
        className="itemImage"
      />
      <div className="itemDescription">
        <p className="item-name">
          <b>{props.itemName}</b>
        </p>
        <p>{props.itemDescription}</p>
      </div>
      <div
        style={{ display: "flex", flex: "row", justifyContent: "space-evenly" }}
      >
        <button className="addToCartButton" onClick={() => addToCart(props.id)}>
          Add To Cart
        </button>
        <p className="item-price"> ${props.itemPrice}</p>
      </div>
    </div>
  );
};

function addToCart(itemID) {
  axios
    .post("http://localhost:5000/AddToCart", { itemID })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default Item;

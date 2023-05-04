import React, { useContext } from "react";
import axios from "axios";

export const Item = (props) => {
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
        className="itemImage"
      />
      <div className="description">
        <p className="item-name">
          <b>{props.itemName}</b>
        </p>
        <p>{props.itemDescription}</p>
      </div>
      <div
        style={{ display: "flex", flex: "row", justifyContent: "space-evenly" }}
      >
        <button className="addToCartBttn" onClick={() => addToCart(props.id)}>
          Add To Cart
        </button>
        <p className="item-price"> ${props.itemPrice}</p>
      </div>
    </div>
  );
};

function addToCart(itemID) {
  const formData = new FormData();
  console.log("QWE['PLMWPEINGPWOEN GWEOPIKN GVOIK: " + itemID);
  formData.append("itemID", itemID);

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

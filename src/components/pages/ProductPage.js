import React from "react";
import "../../css/ProductPage.css";
import { useSearchParams } from "react-router-dom";

const handleAddToCart = () => {
  // TODO: Implement cart functionality
};

const getImage = (path) => {
  return path.split("/").slice(-1);
};

export default function ProductPage() {
  const [searchparams] = useSearchParams();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img
        className="product-image"
        src={require("../images/" +
          getImage(searchparams.get("Image").replace(/\\/g, "/")))}
      />
      <div className="product-details">
        <h1 className="product-name">{searchparams.get("Name")}</h1>
        <div className="solid-line" />
        <p className="product-description">
          Description: {searchparams.get("Description")}
        </p>
        <p>${searchparams.get("Price")}</p>
        <button className="BuyButton">Add To Cart</button>
      </div>
    </div>
  );
}

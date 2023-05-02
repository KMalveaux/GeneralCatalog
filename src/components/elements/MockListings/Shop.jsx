import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "./shop-context";
import Item from "./Item";
import "./MockListings.css";
import axios from "axios";

export const Shop = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/SelectListings"
        );
        setListings(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchListings();
  }, []);

  const getImage = async (path) => {
    const imgName = path.split("/").slice(-1);
    const imgPath = `../images/${imgName}`;
    const module = await import(imgPath);
    return module.default;
  };

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Wizard Shop Listings</h1>
      </div>
      <div className="items">
        {listings.map(async (listing) => {
          const itemImage = await getImage(listing.IMAGE.replace(/\\/g, "/"));
          return (
            <Item
              key={listing.id}
              id={listing.id}
              itemName={listing.PRODUCT_NAME}
              itemPrice={listing.PRICE}
              itemImage={itemImage}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};
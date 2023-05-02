import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ITEMS } from "../MockListings";
import { MockItems } from "./mock-listings";
import "./ItemShop.css";
import { ShopContext } from "./shop-context";
import Item from "../item";

export const Shop = () => {
  const [listings, setListings] = useState([]);
  const { addToCart, cartItems } = useContext(ShopContext);

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

  const getImage = (path) => {
    console.log(path.split("/").slice(-1));
    return path.split("/").slice(-1);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Wizard Shop Listings</h1>
      </div>

      <div className="listingsPage">
        {listings.map((listing) => (
          <div className="individualListing" key={listing.ID}>
            <Item
              id={listing.ID}
              itemName={listing.PRODUCT_NAME}
              itemPrice={listing.PRICE}
              itemImage={listing.IMAGE}
            />
          </div>
        ))}
      </div>

      <div className="mockItems">
        {ITEMS.map((mockItem) => (
          <MockItems key={mockItem.id} data={mockItem} />
        ))}
      </div>
    </div>
  );
};

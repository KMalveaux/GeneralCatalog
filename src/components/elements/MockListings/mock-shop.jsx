import React, { useEffect, useState, useContext } from "react";
import { ITEMS } from "../MockListings";
import { MockItems } from "./mock-listings";
import "./MockListings.css";
import axios from "axios";
import { ShopContext } from "./mock-shop-context";
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
          <div className="individualListing">
            <Item
              id={listing.ID}
              itemName={listing.PRODUCT_NAME}
              itemPrice={listing.PRICE}
              itemImage={listing.IMAGE}
            />

            {/* <h2>{listing.PRODUCT_NAME}</h2>
            <img
              src={require(`../../images/` +
                getImage(listing.IMAGE.replace(/\\/g, "/")))}
              alt="PIC HERE"
            />
            <p>{listing.PRICE}</p>
            <button
              className="addToCartBttn"
              onClick={() => addToCart(listing.id)}
            >
              Add To Cart
            </button> */}
          </div>
        ))}
      </div>

      <div className="mockItems">
        {ITEMS.map((mockItem) => (
          <MockItems data={mockItem} />
        ))}
      </div>
    </div>
  );
};

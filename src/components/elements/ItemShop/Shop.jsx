import React, { useEffect, useState } from "react";
import "./ItemShop.css";
import axios from "axios";
import Item from "../item";

export const Shop = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/SelectListings"
        );
        const sortedListings = response.data.sort((a, b) =>
          a.PRODUCT_NAME.localeCompare(b.PRODUCT_NAME)
        );
        setListings(sortedListings);
      } catch (error) {
        console.error(error);
      }
    };
    fetchListings();
  }, []);

  return (
    <div>
      <div className="listingsPage">
        {listings.map((listing) => (
          <div
            className="individualListing"
            onClick={() => console.log(`"You clicked on ${listing.rowid}"`)}
          >
            <Item
              id={listing.rowid}
              itemName={listing.PRODUCT_NAME}
              itemPrice={listing.PRICE}
              itemDescription={listing.DESCRIPTION}
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
    </div>
  );
};

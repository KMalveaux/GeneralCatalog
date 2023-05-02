import React, { useEffect, useState } from "react";
import { ITEMS } from "../MockListings";
import { MockItems } from "./mock-listings";
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

  const getImage = (path) => {
    console.log(path.split("/").slice(-1));
    return path.split("/").slice(-1);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Wizard Shop Listings</h1>
      </div>

      <div>
        <ul>
          {listings.map((listing) => (
            <li key={listing.id}>
              <h2>{listing.PRODUCT_NAME}</h2>
              <img
                src={require(`../../images/` +
                  getImage(listing.IMAGE.replace(/\\/g, "/")))}
                alt="PIC HERE"
              />
              <p>{listing.PRICE}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mockItems">
        {ITEMS.map((mockItem) => (
          <MockItems data={mockItem} />
        ))}
      </div>
    </div>
  );
};

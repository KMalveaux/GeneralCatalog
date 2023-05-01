import React from "react";
import { ITEMS } from "../MockListings"
import { MockItems } from "./mock-listings";
import "./MockListings.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Wizard Shop Listings</h1>
      </div>

      <div className="mockItems">
        {ITEMS.map((mockItem) => (
          <MockItems data={mockItem} />
        ))}
      </div>
    </div>
  );
};


import React, { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import ProductPost from "./elements/ProductPost";
import CategoryPost from "./elements/CategoryPost";
import "../css/Multicarousel.css";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

export default function Multicarousel(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3500, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const items = [
    { itemName: "Broom", itemPrice: "$599.99" },
    { itemName: "Wand", itemPrice: "$10.99" },
    { itemName: "Flask", itemPrice: "$9.99" },
    { itemName: "Cats", itemPrice: "$2.50" },
    { itemName: "Cauldrons", itemPrice: "$349.99" },
    { itemName: "Spells", itemPrice: "$19.99" },
  ];

  return (
    <div className="multiCarousel-listings">
      <Carousel responsive={responsive}>
        {items.map((item, index) => (
          <div
            key={index}
            className="sidescrolling-box"
            style={{ height: "100%", width: "100%" }}
          >
            <ProductPost itemName={item.itemName} itemPrice={item.itemPrice} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export function CategoryCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3500, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [categories, setcategories] = useState([]);

  useEffect(() => {
    const fetchcategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/GetCategories");
        setcategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchcategories();
  }, []);

  return (
    <div className="multiCarousel-listings">
      <Carousel responsive={responsive}>
        {categories.map((category) => (
          <div
            className="sidescrolling-box"
            style={{ height: "100%", width: "100%" }}
            onClick={() => {
              console.log(`"You clicked on ${category}"`);
            }}
          >
            <CategoryPost CategoryName={category} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "./Cart-item";
import "./Cart.css";

export const Cart = () => {
  // const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  const [listings, setListings] = useState([]);
  const [cartIDs, setCartIDs] = useState([]);

  useEffect(() => {
    const fetchIDs = async () => {
      axios
        .get("http://localhost:5000/SelectCart", {})
        .then((response) => {
          const itemIDs = response.data.map((item) => item.itemID);
          setCartIDs(itemIDs);
          console.log("Cart ids (FROM DB)");
          console.log(response.data);
          console.log("Cart ids (LOCAL)");
          console.log(itemIDs);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchIDs();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      axios
        .get("http://localhost:5000/SelectListingsByID", {
          params: { rowids: cartIDs.join(",") },
        })
        .then((response) => {
          setListings(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchCart();
  }, [cartIDs]);

  const clearCart = () => {
    axios
      .post("http://localhost:5000/removeAllCart")
      .then((response) => {
        console.log("Cart cleared successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteCart = () => {
    axios
      .get("http://localhost:5000/deleteCart")
      .then((response) => {
        console.log("Cart deleted successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const removeListing = (indexToRemove) => {
    console.log("removing rowid " + indexToRemove + " from listing");
    setListings((prevListings) =>
      prevListings.filter((listing) => listing.rowid !== indexToRemove)
    );
    console.log("listings after removal");
    console.log(listings);

    console.log("removing rowid " + indexToRemove + " from cartIDs");
    setCartIDs((prevCartIDs) =>
      prevCartIDs.filter((listing) => listing.rowid !== indexToRemove)
    );
    console.log("cartIDs after removal");
    console.log(cartIDs);
    //window.location.reload();
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div>
        {listings.map((listing) => {
          return (
            <div key={listing.rowid}>
              <CartItem
                itemName={listing.PRODUCT_NAME}
                itemPrice={listing.PRICE}
                itemImage={listing.IMAGE}
                id={listing.rowid}
                removeListing={() => removeListing(listing.rowid)}
              />
            </div>
          );
        })}
        <button onClick={() => clearCart()}>Clear Cart</button>
        <button onClick={() => deleteCart()}>Delete Cart</button>
      </div>
    </div>
  );
};

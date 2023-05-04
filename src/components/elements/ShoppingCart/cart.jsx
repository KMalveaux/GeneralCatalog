import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../ItemShop/Shop-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CartItem from "./Cart-item";
import "./Cart.css";

export const Cart = () => {
  // const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const { getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const [listings, setListings] = useState([]);
  const [cartIDs, setCartIDs] = useState([]);

  useEffect(() => {
    const fetchIDs = async () => {
      axios
        .get("http://localhost:5000/SelectCart", {})
        .then((response) => {
          const itemIDs = response.data.map((item) => item.itemID);
          setCartIDs(itemIDs);
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

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div>
        {listings.map((listing) => (
          <CartItem
            itemName={listing.PRODUCT_NAME}
            itemPrice={listing.PRICE}
            itemImage={listing.IMAGE}
            id={listing.rowid}
          />
        ))}
        <button onClick={() => clearCart()}>Clear Cart</button>
        <button onClick={() => deleteCart()}>Delete Cart</button>
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h2> Your Shopping Cart is Empty</h2>
      )}
    </div>
  );
};

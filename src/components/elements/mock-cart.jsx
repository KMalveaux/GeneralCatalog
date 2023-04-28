import React, { useContext } from "react";
import { ShopContext } from "./mock-shop-context";
import { ITEMS } from "./MockListings"
import { CartItem } from "./mock-cart-item";
import { useNavigate } from "react-router-dom";

import "./MockCart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {ITEMS.map((mockItem) => {
          if (cartItems[mockItem.id] !== 0) {
            return <CartItem data={mockItem} />;
          }
        })}
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

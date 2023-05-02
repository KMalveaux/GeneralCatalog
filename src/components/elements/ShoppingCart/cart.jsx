import React, { useContext } from "react";
import { ShopContext } from "../ItemShop/shop-context";
import { ITEMS } from "../MockListings"
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const nonEmptyItems = ITEMS.filter((mockItem) => cartItems[mockItem.id] !== 0);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {nonEmptyItems.map((mockItem) => (
          <CartItem key={mockItem.id} data={mockItem} />
        ))}
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

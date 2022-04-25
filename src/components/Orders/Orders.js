import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  const handleRemoveProducts = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };

  // console.log(cart)
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveProducts={handleRemoveProducts}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          {/* <Link to='/inventory'>
                        <button>Proceed Checkout</button>
                    </Link> */}
          <button
            onClick={() => {
              navigate("/shipment");
            }}
          >
            Proceed Checkout
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;

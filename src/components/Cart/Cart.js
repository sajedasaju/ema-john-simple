import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart)

  /* 
        let price = 0;
        cart.map(cartElement => {
            price += cartElement.price;
            console.log(price)
        })
    
     */
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
    shipping += product.shipping;
    quantity += product.quantity;
  }
  //tax calculation 10 % tax (10/100)
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = total + shipping + parseFloat(tax);

  return (
    <div className="cart">
      <h4>Order Summuery</h4>
      <p>Selected items :{quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: {shipping}</p>
      <p>Tax: {tax}</p>
      <h3>Grand Total: {grandTotal.toFixed(2)}</h3>
      {props.children}
    </div>
  );
};

export default Cart;

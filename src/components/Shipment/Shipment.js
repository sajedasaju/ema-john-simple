import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneBlur = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, email, phoneNumber, address };
    console.log(shipping);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form action="">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              placeholder="Your Address"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              onBlur={handlePhoneBlur}
              type="number"
              name="phone-number"
              id=""
              placeholder="phone-number"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;

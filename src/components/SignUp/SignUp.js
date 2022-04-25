import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../../images/google-logo.png";
import auth from "./../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      setError("Your two password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 character or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Signup</h2>
        <form action="" onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              placeholder="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              id=""
              placeholder="confirm-password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Signup" />
        </form>
        <p className="create-account">
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>

        <div className="line-or">
          <div className="empty-div"></div>
          <span>or</span>
          <div className="empty-div"></div>
        </div>

        <div className="btn-container">
          <button className="continue-button">
            <img className="GoogleLogo" src={GoogleLogo} alt="" />
            <p>Continue with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

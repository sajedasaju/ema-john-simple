import React, { useState } from "react";
import "./LogIn.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogo from "../../images/google-logo.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();
  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form action="" onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
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
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading....</p>}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p className="create-account">
          New to Ema-john?{" "}
          <Link className="form-link" to="/signup">
            Create an account
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

export default LogIn;

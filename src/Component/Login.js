import React, { useState, useContext } from "react";
import Twitter from "../Twitter-Logo.png";
import "./Login.css";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([]);
  const authContext = useContext(AuthContext);

  function login(e) {
    e.preventDefault();

    // @todo: send api request to validate data and get token

    if (email === "hekmatmalkawi@hotmail.com") {
      const token = "Hikmat Malkawi";
      const userName = "@hikmat_malkawi";
      localStorage.setItem("token", token);
      localStorage.setItem("userName", userName);
      localStorage.setItem("email", email);
      localStorage.setItem("posts", posts);
      authContext.setAuth({ token, email });
    } else {
      alert("wrong details");
    }
  }

  return (
    <div className="container">
      <div>
        <img src={Twitter} className="logo mt-4" />
        <h4 className="text-center mt-4 mb-4 header">Log in to Twitter</h4>
      </div>

      <form>
        <input
          type="email"
          className="form-control lform"
          placeholder="Phone, email, or username"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mt-3 lform"
          placeholder="Password"
          id="pwd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-primary login "
          onClick={login}
        >
          Log in
        </button>
        <div className="em mt-4">
          <a href="#">Forgot password?</a> <span>.</span>{" "}
          <a href="#">Sign Up for Twitter</a>
        </div>
      </form>
    </div>
  );
}

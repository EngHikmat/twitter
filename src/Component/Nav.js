import React, { useContext } from "react";
// import Twitter1 from "../Twitter-Logo.png";
import tweet from "../tweet.png";
import "./Nav.css";
import NavItem from "./NavItem";
import Avatar from "../Component/RoutesComponents/avatar3.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Component/AuthContext";

export default function Nav() {
  const name = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const authContext = useContext(AuthContext);

  function logout() {
    console.log("Done");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    authContext.setAuth({});
    console.log("Done2");
  }

  return (
    <div className="container sidebar ">
      <ul className="avbar-nav flex-column mt-2">
        <div className="icon">
          <i className="fab fa-twitter"></i>
        </div>

        <NavLink exact to="/">
          <NavItem icon={"fas fa-home"} value={"Home"} />
        </NavLink>
        <NavLink to="/explore">
          <NavItem icon={"fas fa-hashtag"} value={"Explore"} />
        </NavLink>
        <NavLink to="/notification">
          <NavItem icon={"far fa-bell"} value={"Notifiaction"} />
        </NavLink>
        <NavLink to="/messages">
          <NavItem icon={"far fa-envelope"} value={"Messages"} />
        </NavLink>
        <NavLink to="/bookmarks">
          <NavItem icon={"far fa-bookmark"} value={"Bookmarks"} />
        </NavLink>
        <NavLink to="/lists">
          <NavItem icon={"fas fa-list-alt"} value={"Lists"} />
        </NavLink>
        <NavLink to="/profile">
          <NavItem icon={"far fa-user"} value={"Profile"} />
        </NavLink>
        <NavLink to="/more">
          <NavItem icon={"fas fa-ellipsis-h"} value={"More"} />
        </NavLink>

        <button className="btn btn-primary tweet mt-2">Tweet</button>
        <div className="imgcover">
          <a>
            <img className="tweetc" src={tweet} />
          </a>
        </div>

        <div className="av dropdown" data-toggle="dropdown">
          <img
            src={Avatar}
            className="avatar rounded-circle"
            data-toggle="dropdown"
          />
          <div className="logOutDropDown">
            <h6>{name}</h6>
            <span>{userName}</span>
          </div>
          <span class="dropdown-toggle" data-toggle="dropdown"></span>
          <div class="dropdown-menu">
            <div className="dropdown-item x">
              <img
                src={Avatar}
                className="avatar rounded-circle"
                data-toggle="dropdown"
              />
              <div className="logOutDropDown1">
                <h6>{name}</h6>
                <span>{userName}</span>
              </div>
              <i class="fas fa-check"></i>
            </div>
            <a class="dropdown-item" href="#">
              Add an existing account
            </a>
            <a class="dropdown-item border-0" href="#" onFocus={logout}>
              Log Out {userName}
            </a>
          </div>
        </div>
      </ul>
    </div>
  );
}

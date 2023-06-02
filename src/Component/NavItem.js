import React, { Fragment, useState } from "react";
// import Nav from "./Nav";
import "./NavItem.css";

export default function NavItem(props) {
  const [icon, setIcon] = useState("");

  return (
    <Fragment>
      <li className="nav-item">
        <span className="spico">
          <i className={props.icon}></i>
        </span>
        <span>{props.value}</span>
      </li>
    </Fragment>
  );
}

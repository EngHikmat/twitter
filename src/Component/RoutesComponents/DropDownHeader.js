import React from "react";
import "./DropDownHeader.css";

export default function DropDownHeader() {
  return (
    <div className="Conta">
      <div className="dropdown ">
        <span classNameName="bg" data-toggle="dropdown">
          <div type="button" className="dropdown-toggle"></div>
        </span>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="#">
            Link 1
          </a>
          <a className="dropdown-item" href="#">
            Link 2
          </a>
          <a className="dropdown-item" href="#">
            Link 3
          </a>
        </div>
      </div>
    </div>
  );
}

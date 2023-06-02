import React from "react";
import "./Reference.css";
import useFocus from "./CustomHooks/useFocus";

export default function References() {
  const { color, iconChange, resetColor } = useFocus(
    "rgba(71, 71, 71, 0.507)",
    "#1DA1F2"
  );

  return (
    <div className="Header1">
      <div className="inner-addon left-addon">
        <i class="fas fa-search" style={{ color: color }}></i>
        <input
          type="text"
          className="form-control headsearch mt-2 "
          placeholder="Search Twitter"
          onFocus={iconChange}
          onBlur={resetColor}
        />
      </div>
    </div>
  );
}

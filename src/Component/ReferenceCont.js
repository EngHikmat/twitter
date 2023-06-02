import React, { useState } from "react";
import "./ReferenceCont.css";

export default function ReferenceCont() {
  const [Hashtags] = useState([
    "#Covid_19_Virus",
    "#Jordan",
    "#Donald_Trumb",
    "#إلا رسول الله ",
    "#Iraq",
  ]);

  const [categ] = useState([
    "Trending in Jordan",
    "Trending in Jordan",
    "Trending in USA",
    "Politics . tredning",
    "Trending on Iraq",
  ]);

  //   const c = categ.map((s) => <span>{s}</span>);

  const x = 0;

  const tr = Hashtags.map((item) => (
    <span>
      <i class="fas fa-ellipsis-h"></i>
      <p>{categ[x]}</p>
      <h6>{item}</h6>
    </span>
  ));

  return (
    <div className="trendes">
      <span className="TrHeader">
        <h4>Trends for you</h4>
        <i class="fas fa-cog"></i>
      </span>
      {tr}
      <span className="TrFooter">
        <a href="/">Show more</a>
      </span>
    </div>
  );
}

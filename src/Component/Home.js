import React from "react";
// import { AuthContext } from "../Component/AuthContext";
import Nav from "./Nav";
import "./Home.css";
import { BrowserRouter, Route } from "react-router-dom";
import Content from "./RoutesComponents/Content";
import Explore from "./RoutesComponents/Explore";
import Reference from "./Reference";
import ReferenceCont from "./ReferenceCont";

export default function Home() {
  return (
    <BrowserRouter>
      <div className="container-fuild ">
        <div className="row">
          <div className="c1 nv ">
            <Nav />
          </div>

          <div className="c2  v ">
            <Route exact path="/" component={Content} />
            <Route path="/Explore" component={Explore} />
          </div>
          <div className="c3">
            <ReferenceCont />
            <Reference />
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

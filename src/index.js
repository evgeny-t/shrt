import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { create, get, stats } from "./api";
import { Header, Shoort, History } from "./components";

ReactDOM.render(
  <div>
    <Header />
    <Shoort />
    <History />
  </div>,
  document.body
);

create("http://example.com")
  .then(({ shortcode }) => stats(shortcode))
  .then(loc => console.log(loc));

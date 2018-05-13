import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { create, get, stats } from "./api";
import { App } from "./components";

ReactDOM.render(<App />, document.body);

create("http://example.com")
  .then(({ shortcode }) => stats(shortcode))
  .then(loc => console.log(loc));

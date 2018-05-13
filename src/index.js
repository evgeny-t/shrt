import "./index.scss";
import { create, get, stats } from "./api";

Promise.all([import("react-dom"), import("react")]).then(
  ([ReactDOM, React]) => {
    ReactDOM.render(<div />, document.body);
  }
);

create("http://example.com")
  .then(({ shortcode }) => stats(shortcode))
  .then(loc => console.log(loc));

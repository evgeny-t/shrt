import "./index.scss";
import { create } from "./api";

Promise.all([import('react-dom'), import('react')])
.then(([ReactDOM, React]) => {
  ReactDOM.render(<div />, document.body);
});
window.create = create;

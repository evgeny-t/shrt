import React from "react";
import "./styles.scss";

export class Shoort extends React.Component {
  render() {
    return (
      <div className="shoort">
        <input
          className="shoort__input"
          type="text"
          placeholder="Paste the link you want to shorten here"
        />
        <button className="shoort__btn shoort__btn--disabled">
          Shorten this link
        </button>
      </div>
    );
  }
}

import React from "react";
import "./styles.scss";

export class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <span className="main-header__logo">Shooooort</span>
        <span className="main-header__motto">
          The link shortener with a long name
        </span>
      </header>
    );
  }
}

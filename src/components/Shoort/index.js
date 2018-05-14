import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./styles.scss";

export class Shoort extends React.Component {
  static propTypes = {
    onShorten: PropTypes.func.isRequired
  };
  state = {
    value: ""
  };

  render() {
    return (
      <div className="shoort">
        <input
          value={this.state.value}
          onChange={this._handleChange}
          className="shoort__input"
          type="text"
          placeholder="Paste the link you want to shorten here"
        />
        <button
          className={cx("shoort__btn", {
            "shoort__btn--disabled": !this.state.value
          })}
          onClick={this._handleClick}
        >
          Shorten this link
        </button>
        <div
          className={cx("shoort__error", {
            "shoort__error--visible": this.props.error
          })}
        >
          Something bad happened. Please try again in a moment.
        </div>
      </div>
    );
  }

  _handleChange = event => {
    this.setState({ value: event.target.value });
  };

  _handleClick = () => {
    const result = this.props.onShorten(this.state.value);
    if (result && result.then) {
      result
        .then(() => this.setState({ value: "" }))
        .catch(error => console.error(error));
    }
  };
}

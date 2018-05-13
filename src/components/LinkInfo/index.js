import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./styles.scss";

export class LinkInfo extends React.Component {
  static propTypes = {
    shortcode: PropTypes.string,
    url: PropTypes.string
  };

  urlBase = "impraise-shorty.herokuapp.com";

  render() {
    const { shortcode, url, active } = this.props;
    return (
      <div className={cx("link-info", { "link-info--active": active })}>
        <div className="link-info__shortened">
          {this.urlBase}/<span className="link-info__accent">{shortcode}</span>
          <a className="link-info__hint" onClick={this._handleClick}>
            Click to copy this link
          </a>
        </div>
        <div className="link-info__original">{url}</div>
      </div>
    );
  }

  _handleClick = event => {
    event.preventDefault();
    const textarea = document.createElement("textarea");
    textarea.innerText = `${this.urlBase}/${this.props.shortcode}`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };
}

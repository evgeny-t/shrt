import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export class LinkInfo extends React.Component {
  static propTypes = {
    shortcode: PropTypes.string,
    url: PropTypes.string
  };

  render() {
    const { shortcode, url } = this.props;
    return (
      <div className="link-info">
        <div className="link-info__shortened">
          impraise-shorty.herokuapp.com/<span className="link-info__accent">{shortcode}</span>
          <span className="link-info__hint">Click to copy this link</span>
        </div>
        <div className="link-info__original">{url}</div>
      </div>
    );
  }
}

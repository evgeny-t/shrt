import React from "react";
import PropTypes from "prop-types";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

import "./styles.scss";
import { LinkInfo } from "../LinkInfo";

export class History extends React.Component {
  static propTypes = {
    onClear: PropTypes.func,
    links: PropTypes.array
  };

  render() {
    return (
      <div className="history">
        <header className="history__header">
          <span className="history__title">Previously shortened by you</span>
          <button className="history__clear-btn" onClick={this.props.onClear}>
            Clear history
          </button>
        </header>
        <table className="history__table">
          <thead>
            <tr className="history__row">
              <th className="history__link">link</th>
              <th className="history__visits">visits</th>
              <th className="history__last-visited">last visited</th>
            </tr>
          </thead>
          <tbody>
            {this.props.links.map(link => {
              const stats = this.props.stats[link.shortcode] || {};
              return (
                <tr key={link.shortcode} className="history__row">
                  <td className="history__link">
                    <LinkInfo
                      shortcode={link.shortcode}
                      url={link.url}
                      active={this.props.lastAdded === link.shortcode}
                    />
                  </td>
                  <td className="history__visits">{stats.redirectCount}</td>
                  <td className="history__last-visited">
                    {stats.lastSeenDate
                      ? `${distanceInWordsToNow(stats.lastSeenDate)} ago`
                      : "never"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

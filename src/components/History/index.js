import React from "react";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

import "./styles.scss";
import { LinkInfo } from "../LinkInfo";

export class History extends React.Component {
  render() {
    return (
      <div className="history">
        <header className="history__header">
          <span className="history__title">Previously shortened by you</span>
          <button className="history__clear-btn">Clear history</button>
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
            {this.props.links.map(link => (
              <tr key={link.shortcode} className="history__row">
                <td className="history__link">
                  <LinkInfo shortcode={link.shortcode} url={link.url} />
                </td>
                <td className="history__visits">{link.redirectCount}</td>
                <td className="history__last-visited">
                  {distanceInWordsToNow(link.startDate)}
                </td>
              </tr>
            ))}
            <tr className="history__row">
              <td className="history__link">
                <LinkInfo
                  shortcode="asdfjkk78"
                  url="http://polandtripsri.blogspot.com/2016/07/blog-post_63.html"
                />
              </td>
              <td className="history__visits">100</td>
              <td className="history__last-visited">now</td>
            </tr>
            <tr className="history__row">
              <td className="history__link">
                <LinkInfo
                  shortcode="asdfjkk78"
                  url="https://unsplash.com/photos/cNgsAdd4-m4"
                />
              </td>
              <td className="history__visits">100</td>
              <td className="history__last-visited">66 minutes ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

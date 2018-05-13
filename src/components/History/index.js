import React from "react";
import "./styles.scss";

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
            <tr className="history__row">
              <td className="history__link">
                <div className="link-info">
                  <div className="link-info__shortened">
                    shooooort.com/<span className="link-info__accent">
                      asdfjkk78
                    </span>
                    <span className="link-info__hint">
                      Click to copy this link
                    </span>
                  </div>
                  <div className="link-info__original">
                    http://polandtripsri.blogspot.com/2016/07/blog-post_63.html
                  </div>
                </div>
              </td>
              <td className="history__visits">100</td>
              <td className="history__last-visited">now</td>
            </tr>
            <tr className="history__row">
              <td className="history__link">
                <div className="link-info">
                  <div className="link-info__shortened">
                    shooooort.com/<span className="link-info__accent">
                      asdfjkk78
                    </span>
                    <span className="link-info__hint">
                      Click to copy this link
                    </span>
                  </div>
                  <div className="link-info__original">
                    https://unsplash.com/photos/cNgsAdd4-m4
                  </div>
                </div>
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

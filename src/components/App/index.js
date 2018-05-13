import React from "react";
import { Header, Shoort, History } from "../../components";
import { create, get, stats } from "../../api";

export class App extends React.Component {
  state = {
    links: []
  };
  render() {
    return (
      <div>
        <Header />
        <Shoort onShorten={this._handleShorten} />
        <History links={this.state.links} />
      </div>
    );
  }

  _handleShorten = url => {
    return create(url)
      .then(({ shortcode }) => Promise.all([shortcode, stats(shortcode)]))
      .then(([shortcode, stats]) => {
        console.log("+", shortcode, stats);
        this.setState(state => {
          const links = [].concat(state.links, { ...stats, shortcode, url });
          links.sort(
            (l, r) => Date.parse(l.startDate) - Date.parse(r.startDate)
          );
          return {
            links
          };
        });
      });
  };
}

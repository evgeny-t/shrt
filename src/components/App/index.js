import React from "react";
import { Header, Shoort, History } from "../../components";
import { create, get, stats } from "../../api";

export class App extends React.Component {
  state = {
    links: [],
    shortCodeToStat: {}
  };
  render() {
    return (
      <div>
        <Header />
        <Shoort onShorten={this._handleShorten} />
        <History
          links={this.state.links}
          stats={this.state.shortCodeToStat}
          onClear={this._handleClear}
          lastAdded={this.state.lastAdded}
        />
      </div>
    );
  }

  componentWillMount() {
    let links = localStorage.getItem("links") || [];
    try {
      links = JSON.parse(links);
    } catch (error) {
      console.warn(error);
    }
    this.setState({ links });
  }

  componentDidUpdate() {
    localStorage.setItem("links", JSON.stringify(this.state.links));
  }

  componentDidMount() {
    this.state.links.reduce(
      (acc, link) =>
        acc.then(() => stats(link.shortcode)).then(stat =>
          this.setState(state => ({
            ...state,
            shortCodeToStat: {
              ...state.shortCodeToStat,
              [link.shortcode]: stat
            }
          }))
        ),
      Promise.resolve()
    );
  }

  _handleShorten = url => {
    return create(url)
      .then(({ shortcode }) => Promise.all([shortcode, stats(shortcode)]))
      .then(([shortcode, stats]) => {
        this.setState(state => {
          const links = [].concat({ shortcode, url }, state.links);
          return {
            links,
            shortCodeToStat: {
              ...state.shortCodeToStat,
              [shortcode]: stats
            },
            lastAdded: shortcode
          };
        });
      });
  };

  _handleClear = () => {
    this.setState({ links: [], shortCodeToStat: {} });
  };
}

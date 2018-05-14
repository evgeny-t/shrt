import React from "react";
import { Header, Shoort, History } from "../../components";
import { create, get, stats } from "../../api";

const restore = key => {
  let item = localStorage.getItem(key);
  try {
    item = JSON.parse(item);
    return item;
  } catch (error) {
    console.warn(error);
    return null;
  }
};

export class App extends React.Component {
  state = {
    links: [],
    shortCodeToStat: {},
    error: null
  };
  render() {
    return (
      <div>
        <Header />
        <Shoort onShorten={this._handleShorten} error={this.state.error} />
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
    this.setState({
      links: restore("links") || [],
      shortCodeToStat: restore("shortCodeToStat") || {}
    });
  }

  componentDidUpdate() {
    localStorage.setItem("links", JSON.stringify(this.state.links));
    localStorage.setItem(
      "shortCodeToStat",
      JSON.stringify(this.state.shortCodeToStat)
    );
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
            error: null,
            links,
            shortCodeToStat: {
              ...state.shortCodeToStat,
              [shortcode]: stats
            },
            lastAdded: shortcode
          };
        });
      })
      .catch(error => {
        this.setState({ error });
        throw error;
      });
  };

  _handleClear = () => {
    this.setState({ links: [], shortCodeToStat: {} });
  };
}

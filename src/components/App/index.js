import React from "react";
import { Header, Shoort, History } from "../../components";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Shoort />
        <History />
      </div>
    );
  }
}

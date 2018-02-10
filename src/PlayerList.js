import React, { Component } from "react";
import ReactDOM from "react-dom";
import PlayerEntry from "./PlayerEntry.js";

export default class PlayerList extends Component {
  render() {
    const entries = new Array(this.props.count).fill(0);
    return <React.Fragment>{entries.map((e, i) => <PlayerEntry key={i} id={i} />)}</React.Fragment>;
  }
}

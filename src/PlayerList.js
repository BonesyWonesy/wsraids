import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayerEntry from './playerentry.js';

export default class PlayerList extends Component {
  render() {
    const entries = new Array(this.props.count).fill(0);

    return (
      <ul>
        {entries.map((entry, i) => {
          return (
            <li key={i}>
              <PlayerEntry id={i} updatePlayer={this.props.updatePlayer} />
            </li>
          );
        })}
      </ul>
    );
  }
}

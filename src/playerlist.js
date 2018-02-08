import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayerEntry from './playerentry.js';

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.entries = [];
  }

  componentWillReceiveProps(nextProps) {
    const entries = [];

    for (let i = 0; i < nextProps.count; ++i) {
      entries.push(
        <li key={i.toString()}>
          <PlayerEntry />
        </li>
      );
    }

    this.entries = entries;
  }

  render() {
    return <ul>{this.entries}</ul>;
  }
}

ReactDOM.render(<PlayerList />, document.getElementById('root'));

export default PlayerList;

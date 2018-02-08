import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayerEntry from './playerentry.js';

class PlayerList extends Component {
  constructor(props) {
    super(props);

    console.dir(props);
    const entries = [];

    for (let i = 0; i < props.count; ++i) {
      entries.push(
        <li key={i.toString()}>
          <PlayerEntry />
        </li>
      );
    }

    this.state = { entries };
  }

  render() {
    return <ul>{this.state.entries}</ul>;
  }
}

ReactDOM.render(<PlayerList />, document.getElementById('root'));

export default PlayerList;

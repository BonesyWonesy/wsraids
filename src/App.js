import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import PlayerList from './playerlist.js';

let playerCount = 0;
let raidedPrior = false;

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      playerCount: 0
    };

    this.incrementPlayerCount = this.incrementPlayerCount.bind(this);
    this.decrementPlayerCount = this.decrementPlayerCount.bind(this);
  }

  incrementPlayerCount(e) {
    this.setState(prevState => {
      return {
        playerCount: prevState.playerCount + 1
      };
    });
  }

  decrementPlayerCount(e) {
    this.setState(prevState => {
      return {
        playerCount: prevState.playerCount <= 0 ? 0 : prevState.playerCount - 1
      };
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  submitReport() {}

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="App-intro" />
        </div>

        <div>
          Number of Raiders: {this.state.playerCount}
          {'     '}
          <button className="DecrementPlayerCount" onClick={this.decrementPlayerCount}>
            -
          </button>
          <button className="IncrementPlayerCount" onClick={this.incrementPlayerCount}>
            +
          </button>
          <br />
          Player names & Team
          <br />
          <PlayerList count={this.state.playerCount} />
        </div>
        <div>
          <button className="Submit" onClick={this.submitReport}>
            {' '}
            Submit
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

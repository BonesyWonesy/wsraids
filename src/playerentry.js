import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PlayerEntry extends Component {
  constructor(props) {
    super(props);

    this.selectTeam = this.selectTeam.bind(this);
    this.toggleRaidedPrior = this.toggleRaidedPrior.bind(this);

    this.state = {
      isUnique: false,
      team: 0
    };
  }

  selectTeam(team) {
    // Only valid values accepted
    this.setState({
      team: team > 3 || team < 0 ? 0 : team
    });
  }

  toggleRaidedPrior() {
    this.setState((prevState, props) => {
      isUnique: prevState.isUnique ? !prevState.isUnique : true;
    });
  }

  render() {
    return (
      <div>
        <input type="text" name="playername" />{' '}
        <button
          className="Team-Harmony"
          onClick={e => {
            this.selectTeam(0);
          }}
        >
          ____
        </button>{' '}
        <button
          className="Team-Mystic"
          onClick={e => {
            this.selectTeam(1);
          }}
        >
          ____
        </button>{' '}
        <button
          className="Team-Instinct"
          onClick={e => {
            this.selectTeam(2);
          }}
        >
          ____
        </button>{' '}
        <button
          className="Team-Valor"
          onClick={e => {
            this.selectTeam(3);
          }}
        >
          ____
        </button>{' '}
        <button className="Check" onClick={this.toggleRaidedPrior}>
          {' '}
          Is this your first time raiding here with this character?{' '}
        </button>
      </div>
    );
  }
}

export default PlayerEntry;

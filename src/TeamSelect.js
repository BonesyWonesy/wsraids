import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class TeamSelect extends Component {
  constructor(props) {
    super(props);

    this.handleTeamSelect = this.handleTeamSelect.bind(this);

    this.state = {
      team: 0,
      setTeam: props.setTeam
    };
  }

  handleTeamSelect(team) {
    this.setState({ team });
    this.state.setTeam(team);
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="default"
          bsSize="large"
          disabled={this.state.team === 0}
          onClick={e => {
            this.handleTeamSelect(0);
          }}
        >
          {' '}
          H{' '}
        </Button>
        <Button
          bsStyle="primary"
          bsSize="large"
          disabled={this.state.team === 1}
          onClick={e => {
            this.handleTeamSelect(1);
          }}
        >
          {' '}
          M{' '}
        </Button>
        <Button
          bsStyle="warning"
          bsSize="large"
          disabled={this.state.team === 2}
          onClick={e => {
            this.handleTeamSelect(2);
          }}
        >
          {' '}
          I{' '}
        </Button>
        <Button
          bsStyle="danger"
          bsSize="large"
          disabled={this.state.team === 3}
          onClick={e => {
            this.handleTeamSelect(3);
          }}
        >
          {' '}
          V{' '}
        </Button>
      </div>
    );
  }
}

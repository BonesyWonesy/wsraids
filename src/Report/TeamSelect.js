import React, { Component } from 'react';
import { FormGroup, Label, ButtonGroup, Button } from 'reactstrap';

// not sure if you still want these to be numbers, or just strings, but I left
// them as numbers.
export default class TeamSelect extends Component {
  state = {
    team: 0,
  };

  teamMap = ['Harmony', 'Mystic', 'Instinct', 'Valor'];

  handleTeamSelect = team => e => {
    e.preventDefault();
    this.setState({ team });
  };

  render() {
    return (
      <FormGroup>
        <Label>Team: {this.teamMap[this.state.team]}</Label>
        <div>
          <ButtonGroup>
            <Button color="info" size="lg" disabled={this.state.team === 0} onClick={this.handleTeamSelect(0)}>
              H
            </Button>
            <Button color="primary" size="lg" disabled={this.state.team === 1} onClick={this.handleTeamSelect(1)}>
              M
            </Button>
            <Button color="warning" size="lg" disabled={this.state.team === 2} onClick={this.handleTeamSelect(2)}>
              I
            </Button>
            <Button color="danger" size="lg" disabled={this.state.team === 3} onClick={this.handleTeamSelect(3)}>
              V
            </Button>
          </ButtonGroup>
          <input type="hidden" name="playerTeam" value={this.state.team} />
        </div>
      </FormGroup>
    );
  }
}

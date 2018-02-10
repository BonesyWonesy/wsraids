import React, { Component } from "react";
import { FormGroup, ControlLabel, ButtonGroup, Button } from "react-bootstrap";

// not sure if you still want these to be numbers, or just strings, but I left
// them as numbers.
export default class TeamSelect extends Component {
  state = {
    team: 0,
  };

  teamMap = ["Harmony", "Mystic", "Instinct", "Valor"];

  handleTeamSelect = team => e => {
    e.preventDefault();
    this.setState({ team });
  };

  render() {
    return (
      <FormGroup>
        <ControlLabel>Team: {this.teamMap[this.state.team]}</ControlLabel>
        <div>
          <ButtonGroup>
            <Button
              bsStyle="default"
              bsSize="large"
              disabled={this.state.team === 0}
              onClick={this.handleTeamSelect(0)}
            >
              H
            </Button>
            <Button
              bsStyle="primary"
              bsSize="large"
              disabled={this.state.team === 1}
              onClick={this.handleTeamSelect(1)}
            >
              M
            </Button>
            <Button
              bsStyle="warning"
              bsSize="large"
              disabled={this.state.team === 2}
              onClick={this.handleTeamSelect(2)}
            >
              I
            </Button>
            <Button
              bsStyle="danger"
              bsSize="large"
              disabled={this.state.team === 3}
              onClick={this.handleTeamSelect(3)}
            >
              V
            </Button>
          </ButtonGroup>
          <input type="hidden" name="playerTeam" value={this.state.team} />
        </div>
      </FormGroup>
    );
  }
}

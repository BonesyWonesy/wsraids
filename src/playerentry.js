import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, Panel, FormControl } from 'react-bootstrap';
import Toggle from 'react-toggle';
import TeamSelect from './TeamSelect.js';

class PlayerEntry extends Component {
  constructor(props) {
    super(props);

    this.handleTeamChange = this.handleTeamChange.bind(this);
    this.toggleRaidedPrior = this.toggleRaidedPrior.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);

    this.state = {
      isUnique: false,
      team: 0,
      playerName: 'unnamed',
      id: props.id
    };
  }

  handleNameChange(event) {
    const name = event.target.value;
    this.setState(prevState => {
      this.props.updatePlayer({
        id: prevState.id,
        team: prevState.team,
        playerName: name,
        isUnique: prevState.isUnique
      });
      return { playerName: name };
    });
  }

  handleTeamChange(team) {
    // Only valid values accepted
    this.setState(prevState => {
      this.props.updatePlayer({
        id: prevState.id,
        team: team > 3 || team < 0 ? 0 : team,
        playerName: prevState.playerName,
        isUnique: prevState.isUnique
      });
      return { team: team > 3 || team < 0 ? 0 : team };
    });
  }

  teamName(team) {
    if (team === 1) {
      return 'Mystic';
    } else if (team === 2) {
      return 'Instinct';
    } else if (team === 3) {
      return 'Valor';
    }
    return 'Harmony';
  }

  toggleRaidedPrior(event) {
    const checked = event.target.checked;
    this.setState(prevState => {
      this.props.updatePlayer({
        id: prevState.id,
        team: prevState.team,
        playerName: prevState.playerName,
        isUnique: checked
      });
      return { isUnique: checked };
    });
  }

  render() {
    return (
      <div>
        <Panel bsStyle="success">
          <Panel.Heading>
            <Panel.Title componentClass="h3">
              <FormControl
                id="formControlsPlayerName"
                type="text"
                label=""
                placeholder="Player name"
                onChange={this.handleNameChange}
              />
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            Team: {this.teamName(this.state.team)}
            <TeamSelect setTeam={this.handleTeamChange} />
          </Panel.Body>
          <Panel.Footer>
            For the week, is this the character's first time raiding here?
            <br />
            <Toggle defaultChecked={this.state.isUnique} onChange={this.toggleRaidedPrior} />
          </Panel.Footer>
        </Panel>
      </div>
    );
  }
}

export default PlayerEntry;

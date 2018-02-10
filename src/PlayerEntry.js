import React, { Component } from "react";
import { Panel, FormControl } from "react-bootstrap";
import TeamSelect from "./TeamSelect.js";
import FirstRaid from "./FirstRaid";

class PlayerEntry extends Component {
  render() {
    return (
      <Panel bsStyle="success">
        <Panel.Heading>
          <Panel.Title componentClass="h3">
            <FormControl
              id="formControlsPlayerName"
              type="text"
              label=""
              name="playerName"
              placeholder="Player name"
            />
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <TeamSelect />
        </Panel.Body>
        <Panel.Footer>
          <FirstRaid />
        </Panel.Footer>
      </Panel>
    );
  }
}

export default PlayerEntry;

import React, { Component } from 'react';
import TeamSelect from './TeamSelect.js';
import FirstRaid from './FirstRaid';
import { Card, CardHeader, CardBody } from 'reactstrap';
class PlayerEntry extends Component {
  render() {
    // <FormGroup id="formControlsPlayerName" type="text" label="" name="playerName" placeholder="Player name" />
    return (
      <Card>
        <CardHeader />
        <CardBody>
          <ul>
            <li>
              <TeamSelect />
            </li>
            <li>
              <FirstRaid />
            </li>
          </ul>
        </CardBody>
      </Card>
    );
  }
}

export default PlayerEntry;

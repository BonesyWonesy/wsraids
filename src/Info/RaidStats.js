import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import DummyChart from './DummyChart.js';
 
export default class RaidStats extends Component {
  render() {
    return (
      <div>
        <Panel bsStyle="success">
          <Panel.Heading>
            Current Attendance Stats
          </Panel.Heading>
          <Panel.Body>
            <DummyChart />
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

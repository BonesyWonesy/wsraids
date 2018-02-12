import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import DummyChart from './DummyChart.js';
 
export default class RaidStats extends Component {
  render() {
    return (
      <div>
        <h3>Current Attendance Stats: </h3>
        <DummyChart />
      </div>
    );
  }
}

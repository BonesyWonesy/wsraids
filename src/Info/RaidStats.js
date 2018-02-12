import React, { Component } from 'react';
import DummyChart from './DummyChart.js';

export default class RaidStats extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Current Attendance Stats: </h3>
          <DummyChart />
        </div>
        <div>
          <h3>Current Unique Accounts: </h3>
          <DummyChart />
        </div>
      </div>
    );
  }
}

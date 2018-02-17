import React, { Component } from 'react';
// import DummyChart from './DummyChart.js';
import PopulationChart from './PopulationChart.js';
import axios from 'axios';
import moment from 'moment';

const today = moment().format('YYYY-MM-DD');
const url = process.env.DEBUG ? 'localhost' : 'wsraids.com';
const port = process.env.DEBUG ? 8116 : 9556;

let urlGET = `http://${url}:${port}/raiddata/${today}`;

export default class RaidStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      raidData: {},
    };
  }

  componentDidMount() {
    let stats = this;
    axios
      .get(urlGET)
      .then(function(response) {
        console.log("Got Response back! Here's the data!");
        console.dir(response.data);

        stats.setState({
          raidData: response.data,
        });
      })
      .catch(function(error) {});
  }

  render() {
    return (
      <div>
        <div>
          <h3>Current Attendance Stats: </h3>
          <PopulationChart data={this.state.raidData} />
        </div>
        <div />
      </div>
    );
  }
}

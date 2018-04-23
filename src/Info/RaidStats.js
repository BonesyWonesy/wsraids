import React, { Component } from 'react';
//import DummyChart from './DummyChart.js';
//import PopulationChart from './PopulationChart.js';
import UniquePlayerChart from './UniquePlayerChart.js';
import axios from 'axios';
import moment from 'moment';

// @TODO: Configs
const today = moment().format('YYYY-MM-DD');
const debug = false;
const url = debug ? 'localhost' : 'wsraids.com';
const port = debug ? 8116 : 9556;

const urlGET = `http://${url}:${port}/raiddata/${today}`;

export default class RaidStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      raidData: null,
    };
  }

  componentDidMount() {
    let stats = this;
    axios
      .get(urlGET)
      .then(function(response) {
        stats.setState({
          raidData: response.data,
        });
      })
      .catch(function(error) {});
  }

  render() {
    // <h3>Current Attendance Stats: </h3>
    // <PopulationChart data={this.state.raidData} />
    return (
      <div>
        <UniquePlayerChart data={this.state.raidData} locations={this.props.locations} />
      </div>
    );
  }
}

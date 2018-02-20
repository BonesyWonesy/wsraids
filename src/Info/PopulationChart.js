import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import moment from 'moment';
import { isEmpty, forIn } from 'lodash';

class CustomTooltip extends Component {
  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#22222299' }}>
          <p className="label">{`${label}`}</p>
          <p className="intro" style={{ color: '#ffffff' }}>{`${payload[0].dataKey} : ${payload[0].value}`}</p>
          <p className="intro" style={{ color: '#ffffff' }}>{`${payload[1].dataKey} : ${payload[1].value}`}</p>
          <p className="intro" style={{ color: '#ffffff' }}>{`${payload[2].dataKey} : ${payload[2].value}`}</p>
          <p className="intro" style={{ color: '#ffffff' }}>{`${payload[3].dataKey} : ${payload[3].value}`}</p>
        </div>
      );
    }

    return null;
  }
}

/**
 *
 * @param {Object} dataSet Array of objects containing at least the following data structure:
 * {
 *   playerName: string,
 *   team: number,  (0-3)
 *   date: string, YYYY-MM-DD format
 * }
 */
const ProcessData = function(dataSet) {
  let chartData = {};
  let sortedData = [];

  if (dataSet) {
    forIn(dataSet, (value, key) => {
      let dateData = chartData[key];
      if (!dateData) {
        dateData = { name: key, harmony: 0, mystic: 0, instinct: 0, valor: 0 };
        sortedData.push(dateData);
      }

      for (let i = 0; i < value.length; ++i) {
        let entry = value[i];
        let team = 'harmony';
        team = parseInt(entry.playerTeam, 10) === 1 ? 'mystic' : team;
        team = parseInt(entry.playerTeam, 10) === 2 ? 'instinct' : team;
        team = parseInt(entry.playerTeam, 10) === 3 ? 'valor' : team;
        dateData[team] += 1;
        chartData[key] = dateData;
      }
    });

    // Sory so that earlier days are first
    sortedData.sort(function(a, b) {
      return moment(a.name).format('X') - moment(b.name).format('X');
    });
  }

  return sortedData;
};

const Chart = props => {
  return (
    <BarChart width={props.width} height={300} data={props.data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Bar dataKey="harmony" stackId="a" fill="#8eceb077" />
      <Bar dataKey="mystic" stackId="a" fill="#0d62db77" />
      <Bar dataKey="instinct" stackId="a" fill="#e5e21477" />
      <Bar dataKey="valor" stackId="a" fill="#db2c0d77" />
    </BarChart>
  );
};

export default class PopulationChart extends Component {
  render() {
    if (isEmpty(this.props.data)) {
      return null;
    }
    return (
      <AutoSizer disableHeight>
        {({ width }) => {
          return <Chart width={width} data={ProcessData(this.props.data)} />;
        }}
      </AutoSizer>
    );
  }
}

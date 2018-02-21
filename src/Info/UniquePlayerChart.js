import React, { Component } from 'react';
import { Tooltip, Pie, PieChart, Cell } from 'recharts';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { isEmpty, forIn } from 'lodash';

let totalUnique = 0;

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
  totalUnique = 0;
  let chartData = [
    { name: 'harmony', value: 0, fill: '#8eceb077' },
    { name: 'mystic', value: 0, fill: '#0d62db77' },
    { name: 'instinct', value: 0, fill: '#e5e21477' },
    { name: 'valor', value: 0, fill: '#db2c0d77' },
  ];

  if (dataSet) {
    forIn(dataSet, (value, key) => {
      let dateData = chartData[key];

      for (let i = 0; i < value.length; ++i) {
        const entry = value[i];
        if (
          entry.firstRaid.toLowerCase() === 't' ||
          entry.firstRaid.toLowerCase() === 'true' ||
          parseInt(entry.firstRaid, 10) === 1
        ) {
          chartData[entry.playerTeam].value += 1;
          ++totalUnique;
        }

        chartData[key] = dateData;
      }
    });
  }

  return chartData;
};

const Chart = props => {
  return (
    <PieChart width={props.width} height={250}>
      <Pie
        data={props.data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8eceb077"
        isAnimationActive={false}
        label
      >
        {props.data.map((entry, index) => <Cell fill={entry.fill} key={entry.name} />)}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default class UniquePlayerChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalUnique: 0,
    };
  }
  render() {
    var processedData = ProcessData(this.props.data);
    if (isEmpty(this.props.data)) {
      return null;
    }
    return (
      <div>
        <h3>Total Unique Players: {totalUnique}</h3>
        <AutoSizer disableHeight>
          {({ width }) => {
            return <Chart width={width} data={processedData} />;
          }}
        </AutoSizer>
      </div>
    );
  }
}

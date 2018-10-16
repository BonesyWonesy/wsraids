import React, { Component } from 'react';
import { Tooltip, Pie, PieChart, Cell } from 'recharts';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { isEmpty, forIn } from 'lodash';

/**
 *
 * @param {Object} dataSet Array of objects containing at least the following data structure:
 * {
 *   playerName: string,
 *   team: number,  (0-3)
 *   date: string, YYYY-MM-DD format
 * }
 * @param {Array} locations Collection of 'GymLocation' objects. Modifies the uniqueChartData
 * on those objects.
 */
const ProcessData = function(dataSet, locations = []) {
  forIn(dataSet, (aPlayerData, date) => {
    // Iterate through all players to determine unique times
    for (let p = 0; p < aPlayerData.length; ++p) {
      const player = aPlayerData[p];

      const isFirst =
        player.firstRaid.toLowerCase() === 't' ||
        player.firstRaid.toLowerCase() === 'true' ||
        parseInt(player.firstRaid, 10) === 1;

      if (isFirst && player.raidLocation) {
        // Find matching location
        for (var l = 0; l < locations.length; ++l) {
          if (locations[l].names.gym === player.raidLocation) {
            locations[l].uniqueChartData.chartData[player.playerTeam].value += 1;
            locations[l].uniqueChartData.totalUnique += 1;
            break;
          }
        }
      }
    }
  });
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
    if (isEmpty(this.props.data)) {
      return null;
    }
    this.props.locations.forEach(element => {
      element.resetUnique();
    });
    ProcessData(this.props.data, this.props.locations);

    return (
      <div>
        {this.props.locations.map((location, idx) => {
          return (
            <div key={idx}>
              <h3 className={`s13${location.s13CellId}`}>
                Total Unique Players for {location.names.gym}: {location.uniqueChartData.totalUnique}
              </h3>
              <AutoSizer disableHeight>
                {({ width }) => {
                  return <Chart width={width} data={location.uniqueChartData.chartData} />;
                }}
              </AutoSizer>
            </div>
          );
        })}
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button, Panel, Modal } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

const dummyRaidStats = [];
const dummyPlayers = [
  { team: 0, name: "Skeet" },
  { team: 1, name: "Bonesy" },
  { team: 1, name: "Ikl" },
  { team: 1, name: "Jes" },
  { team: 2, name: "Dof" },
  { team: 0, name: "Unnamed" },
  { team: 2, name: "Hazle" },
  { team: 3, name: "Misty" },
  { team: 3, name: "Brock" },
  { ash: 3, name: "Ash" },
];

const data = [
  { name: "Sun", harmony: 0, mystic: 0, instinct: 0, valor: 0 },
  { name: "Mon", harmony: 0, mystic: 0, instinct: 0, valor: 0 },
  { name: "Tue", harmony: 0, mystic: 0, instinct: 0, valor: 0 },
  { name: "Wed", harmony: 0, mystic: 0, instinct: 0, valor: 0 },
  { name: "Thu", harmony: 0, mystic: 0, instinct: 0, valor: 0 },
  { name: "Fri", harmony: 0, mystic: 0, instinct: 0, valor: 0 },
  { name: "Sat", harmony: 0, mystic: 0, instinct: 0, valor: 0 },
];

class CustomTooltip extends Component {
  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip" style={{ backgroundColor: "#22222299" }}>
          <p className="label">{`${label}`}</p>
          <p className="intro" style={{ color: "#ffffff" }}>{`${payload[0].dataKey} : ${payload[0].value}`}</p>
          <p className="intro" style={{ color: "#ffffff" }}>{`${payload[1].dataKey} : ${payload[1].value}`}</p>
          <p className="intro" style={{ color: "#ffffff" }}>{`${payload[2].dataKey} : ${payload[2].value}`}</p>
          <p className="intro" style={{ color: "#ffffff" }}>{`${payload[3].dataKey} : ${payload[3].value}`}</p>
        </div>
      );
    }

    return null;
  }
}

const StackedBarChart = props => {
  return (
    <BarChart width={props.width} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis hide />
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

class RaidStat {
  constructor(name, team, date, unique) {
    this.playername = name;
    // Default to team Harmony if not specified or invalid
    this.team = !team || team < 0 || team > 3 ? 0 : team;
    this.date = {
      year: date.year,
      month: date.month,
      day: date.day,
    };
    this.day = new Date(date.year, date.month, date.day).getDay();
    this.uniquevisit = unique;
  }
}

const collate = raidStats => {
  raidStats.forEach(stat => {
    let team = "harmony";
    team = stat.team == 1 ? "mystic" : team;
    team = stat.team == 2 ? "instinct" : team;
    team = stat.team == 3 ? "valor" : team;

    data[stat.day][team] += 1;
  });
  return data;
};

const generateDummyData = (playerName, team) => {
  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  const numAccounts = getRandomArbitrary(2, 10);

  for (let i = 0; i < numAccounts; ++i) {
    const newStat = new RaidStat(playerName, team, { year: 2018, month: 2, day: getRandomArbitrary(3, 10) }, i === 0);
    dummyRaidStats.push(newStat);
  }
};

dummyPlayers.forEach(e => {
  generateDummyData(e.name, e.team);
});

const raidStats = collate(dummyRaidStats);

export default class DummyChart extends Component {
  render() {
    return (
      <AutoSizer disableHeight>
        {({ width }) => {
          return <StackedBarChart width={width} />;
        }}
      </AutoSizer>
    );
  }
}

import React from 'react';
import PlayerList from './PlayerList.js';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Panel, Button, Label, Well } from 'react-bootstrap';
import Datetime from 'react-datetime';

const CustomOverlay = style => ({ classNames, selectedDay, children }) => (
  <div className={classNames.overlayWrapper}>
    <div className={classNames.overlay} style={style}>
      {children}
    </div>
  </div>
);

class PlayerData {
  constructor() {
    this.id = 0;
    this.playerName = 'unnamed';
    this.team = 0;
    this.isUnique = false;
  }
}

class RaidReport extends React.Component {
  constructor(props) {
    super(props);

    this.addRemovePlayerCount = this.addRemovePlayerCount.bind(this);
    this.submitReport = this.submitReport.bind(this);
    this.handleGetDate = this.handleGetDate.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.getReportData = this.getReportData.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);

    const today = new Date();

    this.state = {
      playerCount: 0,
      needsDate: false,
      time: {
        date: today,
        iso: today.toISOString(),
        formatted: today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear()
      },
      playerData: []
    };
  }

  updatePlayer(data) {
    this.setState(prevState => {
      let playersData = prevState.playerData;
      let playerEntry = new PlayerData();

      playerEntry.team = data.team;
      playerEntry.playerName = data.playerName;
      playerEntry.isUnique = data.isUnique;
      playerEntry.id = data.id;

      playersData[data.id] = playerEntry;

      console.log(JSON.stringify(playersData));

      return { playerData: playersData };
    });
  }

  getReportData() {
    return JSON.stringify(this.state.playerData);
  }

  handleGetDate() {
    this.setState({
      needsDate: true
    });
  }

  handleDateChange(val) {
    console.dir(val);
  }

  addRemovePlayerCount(count) {
    this.setState(prevState => {
      const playerCount = prevState.playerCount + count < 0 ? 0 : prevState.playerCount + count;
      let tmp = prevState.playerData.slice();
      tmp.length = playerCount;

      if (playerCount > prevState.playerData.length) {
        tmp.fill(new PlayerData(), prevState.playerData.length, playerCount);
        for (let i = prevState.playerData.length; i < playerCount; ++i) {
          tmp[i].id = i;
        }
      }

      console.log(JSON.stringify(tmp));

      return {
        playerCount,
        playerData: tmp
      };
    });
  }

  submitReport(d) {
    console.dir(this.state.playerData);
  }

  render() {
    return (
      <div>
        <Panel bsStyle="success">
          <Panel.Heading>
            <Panel.Title componentClass="h3">About</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <ul>
              <li>All fields are optional except # of players</li>
              <li>Please choose the correct date (Defaults to today) for the report</li>
              <li>Please have the correct number of players you contributed or are accounting for</li>
              <li>Please don't abuse the submits, we don't want to skew our own results</li>
            </ul>
          </Panel.Body>
        </Panel>
        <Well bsSize="small">
          Date: <Datetime value={this.state.time.date} dateFormat="ddd, MMMM Do YYYY" timeFormat={false} />
        </Well>
        <Well>
          Number of Raiders: {this.state.playerCount}
          <br />
          <Button
            bsSize="large"
            bsStyle="danger"
            onClick={e => {
              this.addRemovePlayerCount(-1);
            }}
          >
            -
          </Button>
          <Button
            bsSize="large"
            bsStyle="success"
            onClick={e => {
              this.addRemovePlayerCount(1);
            }}
          >
            +
          </Button>
        </Well>
        <br />
        <PlayerList count={this.state.playerCount} updatePlayer={this.updatePlayer} />

        <form>
          <FormControl
            componentClass="textarea"
            value={JSON.stringify(this.state.playerData)}
            readOnly
            bsClass="hidden"
          />
          <Button bsStyle="success" className="Submit" type="submit" onClick={this.submitReport}>
            {' '}
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default RaidReport;

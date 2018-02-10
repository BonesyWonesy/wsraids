import React from "react";
import PlayerList from "./PlayerList.js";
import { ButtonGroup, Grid, FormGroup, ControlLabel, Panel, Button, Well } from "react-bootstrap";
import Datetime from "react-datetime";
import getFormData from "get-form-data";

class RaidReport extends React.Component {
  constructor(props) {
    super(props);

    const today = new Date();

    this.state = {
      playerCount: 1,
      time: {
        date: today,
        iso: today.toISOString(),
        formatted: today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
      },
    };
  }

  addRemovePlayerCount = change => e => {
    e.preventDefault();
    this.setState(prevState => ({ playerCount: prevState.playerCount + change }));
  };

  /**
   * loop through an empty array of the same length as the player count and
   * fill it with the data from the form.
   *
   * from:
   *  {
   *    "one": ["a", "b"],
   *    "two": ["c", "d"],
   *  }
   *
   * to:
   *  [
   *    { one: "a", two: "c" },
   *    { ohe: "b", two: "d" }
   *  ]
   */
  createDataCollection = values => {
    const data = new Array(this.state.playerCount).fill(0).map((l, index) => {
      const output = Object.keys(values).reduce((acc, key) => {
        return { ...acc, [key]: values[key][index] };
      }, {});

      return output;
    });

    return data;
  };

  submitReport = e => {
    e.preventDefault();
    const values = getFormData(e.target);

    if (this.state.playerCount === 1) {
      return;
    }

    const data = this.createDataCollection(values);
  };

  render() {
    return (
      <Grid>
        <Panel bsStyle="success">
          <Panel.Heading>
            <Panel.Title componentClass="h3">About</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <ul>
              <li>All fields are optional except # of players</li>
              <li>Please choose the correct date (Defaults to today) for the report</li>
              <li>Please have the correct number of players you contributed or are accounting for</li>
              <li>Please don&apos;t abuse the submits, we don&apos;t want to skew our own results</li>
            </ul>
          </Panel.Body>
        </Panel>

        <form onSubmit={this.submitReport}>
          <Well bsSize="small">
            <FormGroup>
              <ControlLabel>Date</ControlLabel>
              <Datetime
                name="raidtime"
                value={this.state.time.date}
                dateFormat="ddd, MMMM Do YYYY"
                timeFormat={false}
              />
            </FormGroup>
          </Well>
          <Well>
            <ControlLabel>Number of Raiders: {this.state.playerCount}</ControlLabel>
            <br />
            <ButtonGroup>
              <Button bsSize="large" bsStyle="danger" onClick={this.addRemovePlayerCount(-1)}>
                -
              </Button>
              <Button bsSize="large" bsStyle="success" onClick={this.addRemovePlayerCount(1)}>
                +
              </Button>
            </ButtonGroup>
          </Well>
          <PlayerList count={this.state.playerCount} />
          <Button bsStyle="success" type="submit">
            Submit
          </Button>
        </form>
      </Grid>
    );
  }
}

export default RaidReport;

import React from 'react';
import PlayerList from './PlayerList.js';
import { Link } from 'react-router-dom';
import {
  Modal,
  ModalBody,
  ButtonGroup,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  CardText,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Datetime from 'react-datetime';
import getFormData from 'get-form-data';
import axios from 'axios';
import '../report.css';

const today = new Date();
const debug = false;
const url = debug ? 'localhost' : 'wsraids.com';
const port = debug ? 8116 : 9556;

let urlPOST = `http://${url}:${port}/reportraid`;

class RaidReport extends React.Component {
  constructor(props) {
    super(props);

    const year = today.getFullYear();
    const realMonth = today.getMonth() + 1;
    const month = realMonth < 10 ? '0' + realMonth.toString() : realMonth.toString();
    const day = today.getDate() < 10 ? '0' + today.getDate().toString() : today.getDate().toString();

    this.state = {
      locations: props.maps,
      selectedLocation: 0,
      playerCount: 1,
      reportDate: `${year}-${month}-${day}`,
      successModal: 'hide',
      errorModal: 'hide',
      raidLevel: 0,
      dropdownLocation: false,
      dropdownLevel: false,
    };
  }

  toggleDropDown = dropName => {
    this.setState(prevState => {
      let dropDownState = {};
      dropDownState[`dropdown${dropName}`] = !prevState[`dropdown${dropName}`];
      return dropDownState;
    });
  };

  addRemovePlayerCount = change => e => {
    e.preventDefault();
    this.setState(prevState => ({ playerCount: Math.max(1, prevState.playerCount + change) }));
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
        let propertyValue = Array.isArray(values[key]) ? values[key][index] : values[key];
        if (key === 'playerName') {
          if (!propertyValue) propertyValue = 'unnamed';
          else console.log(propertyValue);
        }
        return {
          ...acc,
          [key]: propertyValue,
          date: this.state.reportDate,
          raidLevel: this.state.raidLevel,
          raidLocation: this.state.locations[this.state.selectedLocation].names.gym,
        };
      }, {});

      return output;
    });

    return data;
  };

  onRaidMapSelect = (eventKey, event) => {
    this.setState({
      selectedLocation: eventKey,
    });
  };

  onRaidLevelSelect = (eventKey, event) => {
    this.setState({
      raidLevel: eventKey,
    });
  };

  onDateSelect = moment => {
    if (typeof moment === 'string') {
      //error
      return;
    }

    this.setState({
      reportDate: moment.format('YYYY-MM-DD'),
    });
  };

  dismissModal = () => {
    this.setState({
      successModal: 'hide',
      errorModal: 'hide',
    });
  };

  submitReport = e => {
    e.preventDefault();
    const values = getFormData(e.target);
    const self = this;

    if (this.state.playerCount === 0) {
      return;
    }

    const data = this.createDataCollection(values);
    axios
      .post(urlPOST, data)
      .then(function(response) {
        self.setState({
          successModal: 'show',
        });
      })
      .catch(function(error) {
        self.setState({
          errorModal: 'show',
        });
      });
  };

  render() {
    return (
      <div>
        <Card>
          <CardHeader className="sectionheader">About</CardHeader>
          <CardBody>
            <CardText>All fields are optional except # of players</CardText>
            <CardText>Please choose the correct date (Defaults to today) for the report</CardText>
            <CardText>Please have the correct number of players you contributed or are accounting for</CardText>
            <CardText>Please don&apos;t abuse the submits, we don&apos;t want to skew our own results</CardText>
          </CardBody>
        </Card>

        <form onSubmit={this.submitReport}>
          <FormGroup>
            <Card>
              <CardHeader className="sectionheader">Date of Raid</CardHeader>
              <CardBody className="well">
                <Datetime
                  name="raidtime"
                  defaultValue={today}
                  dateFormat="ddd, MMMM Do YYYY"
                  closeOnSelect={true}
                  timeFormat={false}
                  onChange={this.onDateSelect}
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="sectionheader">Raid Location</CardHeader>
              <CardBody className="well">
                <ButtonDropdown
                  isOpen={this.state.dropdownLocation}
                  toggle={() => {
                    this.toggleDropDown('Location');
                  }}
                >
                  <DropdownToggle caret>{this.state.locations[this.state.selectedLocation].names.gym}</DropdownToggle>
                  <DropdownMenu>
                    {this.state.locations.map((e, i) => {
                      return (
                        <DropdownItem key={`loc${i}`}>
                          <div onClick={() => this.onRaidMapSelect(i)}>{this.state.locations[i].names.gym}</div>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </ButtonDropdown>
              </CardBody>
            </Card>

            <Card>
              <CardHeader className="sectionheader">Raid Level</CardHeader>
              <CardBody className="well">
                <ButtonDropdown
                  isOpen={this.state.dropdownLevel}
                  toggle={() => {
                    this.toggleDropDown('Level');
                  }}
                >
                  <DropdownToggle caret>{this.state.raidLevel ? this.state.raidLevel : 'N/A'}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <div onClick={() => this.onRaidLevelSelect(0)}>N/A</div>
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={() => this.onRaidLevelSelect(1)}>1</div>
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={() => this.onRaidLevelSelect(2)}>2</div>
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={() => this.onRaidLevelSelect(3)}>3</div>
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={() => this.onRaidLevelSelect(4)}>4</div>
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={() => this.onRaidLevelSelect(5)}>5</div>
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </CardBody>
            </Card>
          </FormGroup>

          <Card>
            <CardHeader className="sectionheader">Number of Raiders: {this.state.playerCount}</CardHeader>
            <CardBody className="well">
              <ButtonGroup>
                <Button color="danger" size="lg" onClick={this.addRemovePlayerCount(-1)}>
                  -
                </Button>
                <Button color="success" size="lg" onClick={this.addRemovePlayerCount(1)}>
                  +
                </Button>
              </ButtonGroup>
              <PlayerList count={this.state.playerCount} />
            </CardBody>
          </Card>
          <Button color="success" type="submit">
            Submit
          </Button>
        </form>
        <Modal isOpen={this.state.successModal === 'show'}>
          <ModalBody>
            <Card>
              <CardHeader className="successheader">Thanks for your submission</CardHeader>
              <CardBody>
                <p>Go to the main page to see updated stats!</p>
                <div className="text-center">
                  <Link to="/info">
                    <Button onClick={this.dismissModal}>Dismiss</Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </ModalBody>
        </Modal>
        <Modal isOpen={this.state.errorModal === 'show'}>
          <ModalBody>
            <Card>
              <CardHeader className="failheader">Something went wrong!</CardHeader>
              <CardBody>
                <p>Please try again, or let Bonesy know in Discord!</p>
                <div className="text-center">
                  <Button onClick={this.dismissModal}>Dismiss</Button>
                </div>
              </CardBody>
            </Card>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default RaidReport;

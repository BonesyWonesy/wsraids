import React, { Component } from 'react';
import { Glyphicon, Button, Jumbotron, Tabs, Tab } from 'react-bootstrap';
import RaidStats from './RaidStats.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class RaidInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      raidMaps: props.maps,
    };
  }

  render() {
    return (
      <div className="text-center">
        <h2> Current EX Gym Targets: </h2>
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title={this.state.raidMaps[0].names.gym}>
            <Jumbotron>
              <h1>{this.state.raidMaps[0].names.gym}</h1>
              <p>
                <img
                  alt={'Directions to ' + this.state.raidMaps[0].names.gym}
                  src={this.state.raidMaps[0].getMapsLink()}
                />
                <br />
                <br />
                <Glyphicon glyph="map-marker" />
                <span>{this.state.raidMaps[0].loc.address}</span>
                <br />
              </p>
              <p>
                <CopyToClipboard text={this.state.raidMaps[0].loc.address}>
                  <Button bsSize="large">
                    Copy Address
                    <Glyphicon glyph="copy" />
                  </Button>
                </CopyToClipboard>
                <Button
                  bsSize="large"
                  alt={this.state.raidMaps[0].names.gym}
                  href={`https://www.google.com/maps/dir/Current+Location/${this.state.raidMaps[0].loc.lat},${
                    this.state.raidMaps[0].loc.long
                  }`}
                  target="_blank"
                >
                  Get Directions
                </Button>
              </p>
            </Jumbotron>
          </Tab>
          <Tab eventKey={2} title={this.state.raidMaps[1].names.gym}>
            <Jumbotron>
              <h1>{this.state.raidMaps[1].names.gym}</h1>
              <p>
                <img
                  alt={'Directions to ' + this.state.raidMaps[1].names.gym}
                  src={this.state.raidMaps[1].getMapsLink()}
                />
                <br />
                <br />
                <Glyphicon glyph="map-marker" />
                <span>{this.state.raidMaps[1].loc.address}</span>
                <br />
              </p>
              <p>
                <CopyToClipboard text={this.state.raidMaps[1].loc.address}>
                  <Button bsSize="large">
                    Copy Address
                    <Glyphicon glyph="copy" />
                  </Button>
                </CopyToClipboard>
                <Button
                  bsSize="large"
                  alt={this.state.raidMaps[1].names.gym}
                  href={`https://www.google.com/maps/dir/Current+Location/${this.state.raidMaps[1].loc.lat},${
                    this.state.raidMaps[1].loc.long
                  }`}
                  target="_blank"
                >
                  Get Directions
                </Button>
              </p>
            </Jumbotron>
          </Tab>
        </Tabs>
        <RaidStats locations={this.state.raidMaps} />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Button, Jumbotron, Tabs, Tab } from 'react-bootstrap';
import RaidStats from './RaidStats.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MapIcon from '../map.png';
import CopyIcon from '../copy.png';

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
        <Tabs defaultActiveKey={0} id="uncontrolled-tab-example">
          {this.state.raidMaps.map((gym, idx) => {
            return (
              <Tab eventKey={idx} title={gym.names.gym} key={idx}>
                <Jumbotron>
                  <h1>{gym.names.gym}</h1>
                  <p>
                    <img alt={'Directions to ' + gym.names.gym} src={gym.getMapsLink()} />
                    <br />
                    <br />
                    <img src={MapIcon} alt={gym.loc.address} />
                    <span>{gym.loc.address}</span>
                    <br />
                  </p>
                  <p>
                    <CopyToClipboard text={gym.loc.address}>
                      <Button bsSize="large">
                        Copy Address <img src={CopyIcon} alt="Copy Address" />
                      </Button>
                    </CopyToClipboard>
                    <Button
                      bsSize="large"
                      alt={gym.names.gym}
                      href={`https://www.google.com/maps/dir/Current+Location/${gym.loc.lat},${gym.loc.long}`}
                      target="_blank"
                    >
                      Get Directions
                    </Button>
                  </p>
                </Jumbotron>
              </Tab>
            );
          })}
        </Tabs>
        <RaidStats locations={this.state.raidMaps} />
      </div>
    );
  }
}

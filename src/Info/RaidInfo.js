import React, { Component } from 'react';
import { Glyphicon, Button, Jumbotron } from 'react-bootstrap';
import RaidStats from './RaidStats.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import TotemPole from '../Locations/TotemPole.js';
//import FairmountPlayground from '../Locations/FairmountPlayground.js';
import DelridgePlayground from '../Locations/DelridgePlayground.js';

const raidMap = new DelridgePlayground();

export default class RaidInfo extends Component {
  render() {
    return (
      <div className="text-center">
        <h2> Current EX Gym Target: </h2>
        <Jumbotron>
          <h1>{raidMap.names.gym}</h1>
          <p>
            <img alt={'Directions to ' + raidMap.names.gym} src={raidMap.getMapsLink()} />
            <br />
            <br />
            <Glyphicon glyph="map-marker" />
            <span>{raidMap.loc.address}</span>
            <br />
          </p>
          <p>
            <CopyToClipboard text={raidMap.loc.address}>
              <Button bsSize="large">
                Copy Address
                <Glyphicon glyph="copy" />
              </Button>
            </CopyToClipboard>
            <Button
              bsSize="large"
              alt={raidMap.names.gym}
              href={`https://www.google.com/maps/dir/Current+Location/${raidMap.loc.lat},${raidMap.loc.long}`}
              target="_blank"
            >
              Get Directions
            </Button>
          </p>
        </Jumbotron>
        <RaidStats />
      </div>
    );
  }
}

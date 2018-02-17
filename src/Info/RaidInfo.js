import React, { Component } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import RaidStats from './RaidStats.js';
// import TotemPole from '../Locations/TotemPole.js';
import FairmountPlayground from '../Locations/FairmountPlayground.js';

const raidMap = new FairmountPlayground();

export default class RaidInfo extends Component {
  render() {
    return (
      <div className="text-center">
        <h2> Current EX Gym Target: {raidMap.names.gym}</h2>
        <img alt={'Directions to ' + raidMap.names.gym} src={raidMap.getMapsLink()} />
        <br />
        <Glyphicon glyph="map-marker" />
        {'   '}
        <span>{raidMap.loc.address}</span>
        <br />
        <Button
          alt={raidMap.names.gym}
          href={`https://www.google.com/maps/dir/Current+Location/${raidMap.loc.lat},${raidMap.loc.long}`}
          target="_blank"
        >
          Get Directions
        </Button>
        <RaidStats />
      </div>
    );
  }
}

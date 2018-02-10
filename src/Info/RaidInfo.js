import React, { Component } from "react";
import { Glyphicon, Button } from 'react-bootstrap';
import RaidStats from './RaidStats.js';
import TotemPole from '../Locations/totempole.js';
import FairmountPlayground from '../Locations/fairmountplayground.js';


const raidMap = new FairmountPlayground();




export default class RaidInfo extends Component {
  render() {
    return (
      <div className="text-center">
        <h2> Current EX Gym Target: {raidMap.names.gym}</h2>
        <img src={raidMap.getMapsLink()} />
        <br />
        <Glyphicon glyph="map-marker" />
        {'   '}
        <span>{raidMap.loc.address}</span>
        <Button href={`https://www.google.com/maps/dir/Current+Location/${raidMap.loc.lat},${raidMap.loc.long}`} target="_blank">
          Get Directions
        </Button>
        <RaidStats />
      </div>
    );
  }
}

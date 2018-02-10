import React, { Component } from "react";
import { ListGroup, ListGroupItem, Glyphicon, Button } from 'react-bootstrap';
import RaidStats from './RaidStats.js';


export default class RaidInfo extends Component {
  render() {
    return (
      <div>
        <img src="https://maps.googleapis.com/maps/api/streetview?size=400x200&location=47.5609328,-122.3757268
      &fov=120&heading=10&pitch=10
    &key=AIzaSyDyP9AjluBnbeEGrVd63-nDXcAf_6QqDiU" />
<br />
          <Glyphicon glyph="map-marker" />
          {'   '}
          <span>4714-4798 35th Ave SW, Seattle, WA 98126</span> <Button href="https://www.google.com/maps/dir/Current+Location/47.5603065,-122.3750603" target="_blank">
            Get Directions
          </Button>
          <RaidStats />
      </div>
    );
  }
}

import GymLocation from './GymLocation.js';

export default class DragonflyPark extends GymLocation {
  constructor() {
    super();

    this.s13CellId = 25;

    this.loc = {
      lat: 47.5666474,
      long: -122.3681286,
      address: '4111 26th Ave SW, Seattle, WA 98106',
    };
    this.picture = {
      width: 400,
      height: 200,
      fov: 120,
      heading: 103.58,
      pitch: 10,
      lat: this.loc.lat,
      long: this.loc.long,
    };
    this.names = {
      gym: 'Dragonfly Park',
      common: ['Dragonfly Park, Dragonfly Garden and Pavillion'],
    };
  }
}

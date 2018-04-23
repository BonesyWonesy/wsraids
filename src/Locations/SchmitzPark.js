import GymLocation from './GymLocation.js';

export default class SchmitzPark extends GymLocation {
  constructor() {
    super();

    this.loc = {
      lat: 47.5771,
      long: -122.4033,
      address: '5551 SW Admiral Way, Seattle, WA, 98116',
    };
    this.picture = {
      width: 400,
      height: 200,
      fov: 120,
      heading: 191.47,
      pitch: 10,
      lat: 47.5775731,
      long: -122.4029088,
    };
    this.names = {
      gym: 'Schmitz Park',
      common: ['Schmitz Park', 'Bagger of Tea'],
    };
  }
}

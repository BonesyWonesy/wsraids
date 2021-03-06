import GymLocation from './GymLocation.js';

export default class TotemPole extends GymLocation {
  constructor() {
    super();

    this.s13CellId = 25;

    this.loc = {
      lat: 47.5609328,
      long: -122.3757268,
      address: '4714-4798 35th Ave SW, Seattle, WA 98126',
    };
    this.picture = {
      width: 400,
      height: 200,
      fov: 120,
      heading: 10,
      pitch: 10,
      lat: this.loc.lat,
      long: this.loc.long,
    };
    this.names = {
      gym: 'Totem Pole',
      common: ['Rotary Viewpoint'],
    };
  }
}

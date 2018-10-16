import GymLocation from './GymLocation.js';

export default class HighPointLittleLibrary extends GymLocation {
  constructor() {
    super();

    this.s13CellId = 31;

    this.loc = {
      lat: 47.549477,
      long: -122.3714388,
      address: '3000-3104 High Point Dr SW, Seattle, WA 98126',
    };
    this.picture = {
      width: 400,
      height: 200,
      fov: 120,
      heading: 180.55,
      pitch: 10,
      lat: 47.5500667,
      long: -122.3703469,
    };
    this.names = {
      gym: 'High Point Little Library',
      common: ['High Point Pond Park'],
    };
  }
}

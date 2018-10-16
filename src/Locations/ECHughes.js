import GymLocation from './GymLocation.js';

export default class ECHughes extends GymLocation {
  constructor() {
    super();

    this.s13CellId = 44;

    this.loc = {
      lat: 47.53364,
      long: -122.36943400000001,
      address: '2805 SW Holden St, Seattle, WA 98126',
    };
    this.picture = {
      width: 400,
      height: 200,
      fov: 120,
      heading: 194.06,
      pitch: 10,
      lat: 47.5337205,
      long: -122.3693706,
    };
    this.names = {
      gym: 'E.C. Hughes Playground',
      common: ['E.C. Hughes Playground'],
    };
  }
}

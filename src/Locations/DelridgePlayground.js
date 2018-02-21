import GymLocation from './GymLocation.js';

export default class DelridgePlayground extends GymLocation {
  constructor() {
    super();

    this.loc = {
      lat: 47.563266,
      long: -122.364345,
      address: '4458 Delridge Way SW, Seattle, WA 98106',
    };
    this.picture = {
      width: 400,
      height: 200,
      fov: 120,
      heading: 243,
      pitch: 10,
      lat: 47.5629523,
      long: -122.3633485,
    };
    this.names = {
      gym: 'Delridge Playground',
      common: ['Delridge playfield'],
    };
  }
}

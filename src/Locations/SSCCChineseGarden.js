import GymLocation from './GymLocation.js';

export default class SSCCChineseGarden extends GymLocation {
  constructor() {
    super();

    this.loc = {
      lat: 47.55090799999999,
      long: -122.352439,
      address: '6000 16th Ave. SW, Seattle, WA',
    };
    this.picture = {
      width: 400,
      height: 200,
      fov: 120,
      heading: 46.28,
      pitch: 10,
      lat: 47.5508971,
      long: -122.3525642,
    };
    this.names = {
      gym: 'The Chinese Monument',
      common: ['The Chinese Monument, SSCC Chinese Garden'],
    };
  }
}

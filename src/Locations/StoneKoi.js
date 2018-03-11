import GymLocation from './GymLocation.js';
import KoiPic from '../StoneKoi.jpg';

export default class StoneKoi extends GymLocation {
  constructor() {
    super();

    this.loc = {
      lat: 47.55184599999999,
      long: -122.35194200000001,
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
      gym: 'Stone Koi',
      common: ['Stone Koi, SSCC Chinese Garden'],
    };
  }

  getMapsLink() {
    return KoiPic;
  }
}
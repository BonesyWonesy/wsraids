import GymLocation from './GymLocation.js';

export default class BelvederePark extends GymLocation {
  constructor() {
    super();

    this.s13CellId = 12;

    this.loc = {
      lat: 47.58061899999999,
      long: -122.377274,
      address: '3600 SW Admiral Way, Seattle, WA 98126',
    };
    //www.google.com/maps/dir/Current+Location/,
    this.picture = {
      width: 400,
      height: 200,
      fov: 120,
      heading: 191.41,
      pitch: 10,
      lat: 47.5809727,
      long: -122.3773888,
    };
    this.names = {
      gym: 'Belvedere Park',
      common: ['Belvedere Park'],
    };
  }
}

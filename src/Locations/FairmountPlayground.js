import GymLocation from './GymLocation.js';

export default class FairmountPlayground extends GymLocation {
  constructor() {
    super();

    this.s13CellId = 31;

    this.loc = {
      lat: 47.5540354,
      long: -122.3816351,
      address: '5400 Fauntleroy Way SW, Seattle, WA 98136',
    };
    this.picture = {
      width: 400,
      height: 200,
      fov: 120,
      heading: 100,
      pitch: 10,
      lat: this.loc.lat,
      long: this.loc.long,
    };
    this.names = {
      gym: 'Fairmount Playground',
      common: ['Fairmount playfield'],
    };
  }
}

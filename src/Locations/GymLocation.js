import Handlebars from 'handlebars';

export default class GymLocation {
  constructor() {
    this.loc = {
      lat: 0,
      long: 0,
      address: '',
    };

    this.picture = {
      height: 0,
      width: 0,
      fov: 0,
      heading: 0,
      pitch: 0,
    };

    this.names = {
      gym: '',
      common: [],
    };
  }

  getMapsLink() {
    const maps_template = Handlebars.compile(
      'https://maps.googleapis.com/maps/api/streetview' +
        '?size={{width}}x{{height}}' +
        '&location={{lat}},{{long}}' +
        '&fov={{fov}}' +
        '&heading={{heading}}' +
        '&pitch={{pitch}}' +
        '&key=AIzaSyDyP9AjluBnbeEGrVd63-nDXcAf_6QqDiU'
    );

    const mapLink = maps_template({
      width: this.picture.width,
      height: this.picture.height,
      lat: this.loc.lat,
      long: this.loc.long,
      fov: this.picture.fov,
      heading: this.picture.heading,
      pitch: this.picture.pitch,
    });

    console.log(mapLink);
    return mapLink;
  }
}

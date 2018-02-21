import Handlebars from 'handlebars';

/**
 * Represents the common information in all gym locations.
 *
 */
export default class GymLocation {
  constructor() {
    // Location data for this gym
    this.loc = {
      lat: 0,
      long: 0,
      address: '',
    };

    // Display settings to generate the street view image
    this.picture = {
      height: 0,
      width: 0,
      fov: 0,
      heading: 0,
      pitch: 0,
      lat: 0,
      long: 0,
    };

    // Common names for the gym
    this.names = {
      gym: '',
      common: [],
    };
  }

  /**
   * Uses the Streetview API to generate a Google Street View image from
   * the properties about the gym.
   */
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

    // For latitude on longitude I'll use the location data
    // if it exists
    const mapLink = maps_template({
      width: this.picture.width,
      height: this.picture.height,
      lat: this.picture.lat == 0 && this.loc.lat !== 0 ? this.loc.lat : this.picture.lat,
      long: this.picture.long == 0 && this.loc.long !== 0 ? this.loc.long : this.picture.long,
      fov: this.picture.fov,
      heading: this.picture.heading,
      pitch: this.picture.pitch,
    });

    console.log(mapLink);
    return mapLink;
  }
}

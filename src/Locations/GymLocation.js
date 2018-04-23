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

    this.resetUnique();
  }

  resetUnique() {
    this.uniqueChartData = {
      totalUnique: 0,
      chartData: [
        { name: 'harmony', value: 0, fill: '#8eceb077' },
        { name: 'mystic', value: 0, fill: '#0d62db77' },
        { name: 'instinct', value: 0, fill: '#e5e21477' },
        { name: 'valor', value: 0, fill: '#db2c0d77' },
      ],
    };
  }

  /**
   * Uses the Streetview API to generate a Google Street View image from
   * the properties about the gym.
   */
  getMapsLink() {
    // For latitude on longitude I'll use the location data
    // if it exists

    const lat = this.picture.lat === 0 && this.loc.lat !== 0 ? this.loc.lat : this.picture.lat;
    const long = this.picture.long === 0 && this.loc.long !== 0 ? this.loc.long : this.picture.long;
    const mapLink =
      'https://maps.googleapis.com/maps/api/streetview' +
      `?size=${this.picture.width}x${this.picture.height}` +
      `&location=${lat},${long}` +
      `&fov=${this.picture.fov}` +
      `&heading=${this.picture.heading}` +
      `&pitch=${this.picture.pitch}` +
      '&key=AIzaSyDyP9AjluBnbeEGrVd63-nDXcAf_6QqDiU';

    return mapLink;
  }
}

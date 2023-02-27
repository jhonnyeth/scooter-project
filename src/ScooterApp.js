const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
      "Central Park": [],
      "Times Square": [],
      "Empire State": []
    };
    this.registeredUsers = {};

}

module.exports = ScooterApp

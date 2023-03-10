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

  // missing registerUser, loginUser, logoutUser, createScooter, dockScooter, rentScooter, printState methods
}

module.exports = ScooterApp

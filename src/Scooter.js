class Scooter {
  // scooter code here
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = scooter.nextserial++;
    this.charge = 100;
    this.isBroken = false;
  }
}

module.exports = Scooter;

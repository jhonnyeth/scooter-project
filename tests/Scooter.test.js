const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('does something', () => {
    // edit this to be a real test!
    expect(false).toEqual(true);
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
  rent(user){
    if (this.charge > 20 && !this.isBroken) {
      this.user = user;
      this.station.removeScooter(this);
      console.log(`Scooter #${this.serial} is rented by ${user.username}`);
    } else {
      throw new Error("Need to charge/repair scooter");
    }
  }

  //dock method
  dock(station) {
    this.station = station;
    this.user = null;
    console.log(`Scooter #${this.serial} is docked at ${station.name}`);
  }


  //requestRepair method
  async requestRepair() {
    console.log(`Scooter #${this.serial} needs repair`);
    await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds
    this.isBroken = false;
    console.log(`Scooter #${this.serial} is repaired`);
  }

  //charge method
  async recharge() {
    console.log(`Scooter #${this.serial} is starting to recharge`);
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100;
    console.log(`Scooter #${this.serial} is fully recharged`);
  }


})
Scooter.nextSerial = 1;

module.exports = Scooter;
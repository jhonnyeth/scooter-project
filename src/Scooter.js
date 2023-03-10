class Scooter {
  static nextSerial = 1;
  
  // scooter code here
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }
  // when defining methods, these methods will live in the class (.js) file.
  // then, write your tests to test these methods in the .test.js file
  //rent method
  rent(user){
    if (this.charge > 20 && !this.isBroken) {
      this.user = user;
      // where is removeScooter() defined?
      this.station.removeScooter(this);
      console.log(`Scooter #${this.serial} is rented by ${user.username}`);
    } else {
      // instead of putting all in one error, we could
      // put two conditionals here to check this.charge and throw a charge-specific error,
      // and then check this.isBroken and throw a repair-specific error
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
  // love the use of async behavior here
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
 
}

module.exports = Scooter;

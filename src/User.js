class User {
  // User code here
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;  
  }

  // similar comment in Scooter.js - these methods will live in the 
  // User class file. In the test file, we will call these methods
  // and verify their outputs, e.g. user1.login('pass'),
  // then what do we expect the user1 attribute values to be?
  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
      console.log(`${this.username} is now logged in`);
    } else {
      throw new Error("Incorrect password");
    }
  }

  // test logout
  logout() {
    this.loggedIn = false;
    console.log(`${this.username} is now logged out`);
  }
}


module.exports = User

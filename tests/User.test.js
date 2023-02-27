const User = require('../src/User')

// User tests here

// test username

// test password

// test age

// test login
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
module.exports = User;
const path = require('path');
const ballerData = require('../data/friends.js');

// app refers to the express instance made in server.js
module.exports = (app) => { 
  app.get("/api/friends", (req, res) => {
    res.json(ballersArray);
  });
          
/*   app.post("/api/friends", (req, res) => {
    // The logic of posting the new user's form results
    
    // Assign a variable receives the user's form results
    // using the above variable, retrieve only the array of survey scores into one variable
    // Initialize a totalDifference variable
    // Declare a variable that will assign the index # of the best match object/baller
    // Declare a variable that will assign the lowest totalDifference SO FAR
    // Make sure to manually test by console logging or writing out new tests for the responses or updated list of ballers and friends
  }); */
};
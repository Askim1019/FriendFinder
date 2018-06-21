const path = require('path');
const ballerData = require('../data/friends.js');

// app refers to the express instance made in server.js
module.exports = (app) => { 
  app.get("/api/friends", (req, res) => {
    res.json(ballersArray);
  });
          
  app.post("/api/friends", (req, res) => {
    // Assign a variable receives the user's form results
    let newBaller = (req.body.scores).map((x) => parseInt(x));
    console.log(newBaller);
    // Get the sum of the array of scores from the user after it has been submitted
    let newBallerScore = newBaller.reduce((acc, current) => acc + current, 0);
    console.log(newBallerScore);
    // Initialize a variable to retrieve the best match
    let indexOfMatch;
    // Initialize a current totalDifference variable
    let totalDifference;
    //Initialize a variable to hold the lowest score which is our best match
    let lowestTotalDifference;
    let potentialBaller;
    let potentialBallerScore;
    let arrayOfTotalDifferences = [];
    let match = 0;

    for (let i = 0; i < ballersArray.length; i++){
      // Get the sum of the array of the baller being compared to the user
      potentialBaller = (ballersArray[i].scores).map((x) => parseInt(x));
      potentialBallerScore = ballersArray[i].scores.reduce((acc, current) => acc + current, 0);
  
      // Get the positive total difference between the user and baller
      totalDifference = Math.abs(newBallerScore - potentialBallerScore);
      arrayOfTotalDifferences.push(totalDifference);

   /*    if (totalDifference < lowestTotalDifference) {
        lowestTotalDifference = () => { return totalDifference};
        indexOfMatch
      } */

   /*    console.log(lowestTotalDifference);
      console.log(indexOfMatch); */
    }
    console.log(arrayOfTotalDifferences);
    
    
    for (let i = 0; i < arrayOfTotalDifferences.length; i++) {
      if (ballersArray[i] <= ballersArray[match]) {
        match = i;
      }
    }

    console.log("Your Best Baller Friend Match is: ", ballersArray[match]);
    
    ballersArray.push(req.body);
    res.json(ballersArray[match]);
  });
  
  
};
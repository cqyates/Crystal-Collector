    var wins = 0;
    var loses = 0;
    var score = 0;
    
    //Set a computer guess
    var targetNumber = parseInt(Math.floor(Math.random() * 120) + 19);

    // set a number value for each crystal
    valueGem1 = parseInt(Math.random() * 12) + 1; 
    valueGem2 = parseInt(Math.random() * 12) + 1;
    valueGem3 = parseInt(Math.random() * 12) + 1;
    valueGem4 = parseInt(Math.random() * 12) + 1;
    
    //confirm working values for computer guess and gem
    console.log("the target number is " + targetNumber)
    console.log("gem 1 is worth " + valueGem1)
    console.log("gem 2 is worth " + valueGem2)
    console.log("gem 3 is worth " + valueGem3)
    console.log("gem 4 is worth " + valueGem4)

    //Need an if/else statement that will make sure crystals can't share the same number



    // create click event for each crystal

    // create function that will add the value of crystals

    //if/else statement if current player value equals target number, you win.
                // would love to create a win screen with animation like fireworks
                //have to have the game reset and record the win
    // if the number goes over you lose.
                //have to reset the game and record the loss.
           

$( document ).ready(function() {

    var wins = 0;
    var losses = 0;
    var totalGames = 0;
    var gemTotal = 0;
    

    //Set a computer guess
    var targetNumber = Math.floor((Math.random()*120)+19);

    //show Target Number in HTML
    $("#target-number").text(targetNumber);

    // set a number value for each crystal
    var valueGem1 = Math.floor((Math.random()*12)+1);
    var valueGem2 = Math.floor((Math.random()*12)+1);
    var valueGem3 = Math.floor((Math.random()*12)+1);
    var valueGem4 = Math.floor((Math.random()*12)+1);
    
    //confirm working values for computer guess and gem
    console.log("the target number is " + targetNumber)
    console.log("gem 1 is worth " + valueGem1)
    console.log("gem 2 is worth " + valueGem2)
    console.log("gem 3 is worth " + valueGem3)
    console.log("gem 4 is worth " + valueGem4)

    // create click event for each crystal
    $("#gem-1").on("click", function() {
        gemTotal = gemTotal + valueGem1;
        $("#gem-total").text(gemTotal);
        if (targetNumber === gemTotal) {
            wins++
            $("#wins").text("Wins:" + wins);
            totalGames++
            $("#total-games").text("Total Games:" + totalGames);
        } else if (targetNumber < gemTotal) {
            losses++
            $("#losses").text("Losses: " + losses);
            totalGames++
            $("#total-games").text("Total Games:" + totalGames);
        }
    });

    $("#gem-2").on("click", function() {
        gemTotal = gemTotal + valueGem2;
        $("#gem-total").text(gemTotal);
        if (targetNumber === gemTotal) {
            wins++
            $("#wins").text("Wins:" + wins)
            totalGames++
            $("#total-games").text("Total Games:" + totalGames);
        } else if (targetNumber < gemTotal) {
            losses++
            $("#losses").text("Losses:" + losses);
            totalGames++
            $("#total-games").text("Total Games:" + totalGames);
        }
    });

    $("#gem-3").on("click", function() {
        gemTotal = gemTotal + valueGem3;
        $("#gem-total").text(gemTotal);
        if (targetNumber === gemTotal) {
            wins++
            $("#wins").text("Wins:" + wins);
            totalGames++
            $("#total-games").text("Total Games:" + totalGames);
        } else if (targetNumber < gemTotal) {
            losses++
            $("#losses").text("Losses:" + losses);
            totalGames++
            $("#total-games").text("Total Games:" + totalGames);
        }
    });

    $("#gem-4").on("click", function() {
        gemTotal = gemTotal + valueGem4;
        $("#gem-total").text(gemTotal);
        if (targetNumber === gemTotal) {
            wins++
            $("#wins").text("Wins:" + wins);
            totalGames++
            $("#total-games").text("Total Games:" + totalGames);
        } else if (targetNumber < gemTotal) {
            losses++
            $("#losses").text("Losses:" + losses);
            totalGames++
            $("#total-games").text("Total Games:" + totalGames);
        }
    });

    
    //have to have the game reset and record the win
    // if the number goes over you lose.
                //have to reset the game and record the loss.
                
});

$( document ).ready(function() {

    var targetNumber = Math.floor((Math.random()*120)+19);
    $("#target-number").text(targetNumber);

    var valueGem1 = Math.floor((Math.random()*12)+1);
    var valueGem2 = Math.floor((Math.random()*12)+1);
    var valueGem3 = Math.floor((Math.random()*12)+1);
    var valueGem4 = Math.floor((Math.random()*12)+1);

    var wins = 0;
    var losses = 0;
    var gemTotal = 0;
    

    $("#wins").text("Wins:" + wins);
    $("#losses").text("Losses: " + losses);

    function reset() {
        var targetNumber = Math.floor((Math.random()*120)+19);
        $("#target-number").text(targetNumber);
        gemTotal = 0;
        $("#gem-total").text(gemTotal);
    }
        //function runs when you win, resets the game
    function win(){
        wins++;
        alert ("You Win!");
        $("#wins").text("Wins:" + wins);
        reset();
    }
        //function that runs when you lose, resets the game
    function lose(){
        losses++;
        alert ("You Lose");
        $("#losses").text("Losses: " + losses);
        reset();
    }
    
    
   

    // create click event for each crystal

    $("#gem-1").on("click", function() {
        gemTotal = gemTotal + valueGem1;
        $("#gem-total").text(gemTotal);
        if (targetNumber === gemTotal) {
           win();
        } else if (targetNumber < gemTotal) {
        lose();
        }
    });

    $("#gem-2").on("click", function() {
        gemTotal = gemTotal + valueGem2;
        $("#gem-total").text(gemTotal);
        if (targetNumber === gemTotal) {
           win();
        } else if (targetNumber < gemTotal) {
            lose();
        }
    });

    $("#gem-3").on("click", function() {
        gemTotal = gemTotal + valueGem3;
        $("#gem-total").text(gemTotal);
        if (targetNumber === gemTotal) {
            win();
        } else if (targetNumber < gemTotal) {
            lose();
        }
    });

    $("#gem-4").on("click", function() {
        gemTotal = gemTotal + valueGem4;
        $("#gem-total").text(gemTotal);
        if (targetNumber === gemTotal) {
           win();
        } else if (targetNumber < gemTotal) {
            lose();
        }
    });
    
    

});

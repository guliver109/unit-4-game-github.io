$(document).ready(function() {
    //variable declaration
    var wins = 0;
    var losses = 0;
    var target =  Math.floor(Math.random() * 101) + 20;//random number for target number

    //setting up initial wins and losses to zero
    window.onload = function() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    }
    
    //random number target on screen
    $("#numberGuess").text(target);
    
    //counter variable for capturing user imput
    var counter = 0;
    var imageCounter = 0;
    
    //assaining random value to crystals
    var crystalArr = [ Math.floor((Math.random() * 10) + 1), 
    Math.floor((Math.random() * 10) + 1),
    Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1)];

    $("#crystal-buttons").each( function(){
    var random = Math.floor(Math.random() * 11)+1;
        $(this).attr({
        "data-random": random    
        });
    });

    for (var i = 1; i <= crystalArr.length; i++) {
        var crystalImg = $("<img>");
        crystalImg.addClass("crystal-img");
        crystalImg.attr("src", "assets/images/crystal"+(i)+".png");
        crystalImg.attr("data-crystalValue", crystalArr[imageCounter]);
        //console.log([imageCounter]);
        $("#crystal-buttons").append(crystalImg);
    }
    
    $(".crystal-img").on("click",function() { //function for button click on crystal
        var crystalValue = ($(this).attr("data-crystalValue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;//incrementing counter with crystal value
        document.getElementById("counter").textContent = counter;//score on screen

        //condition for counter
        if (counter === target){
            wins++; 
            alert ("Congratulations!!You Won!!!");
            document.getElementById("wins").textContent = wins;//number of wins on screen
        } else if (counter >= target) {
            losses++;
            alert("Unfortunately, You lost!");
            document.getElementById("losses").textContent = losses;//number of lossses on screen
        } 
        
    });
        
});
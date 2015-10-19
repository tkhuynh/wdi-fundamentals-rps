////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == computerMove) {
        winner = "tie";
    }
    else if (playerMove == "rock" && computerMove == "scissors") {
        winner = "you";
    }
    else if (playerMove == "scissors" && computerMove == "rock") {
        winner = "computer";
    }
    else if (playerMove == "scissors" && computerMove == "paper") {
        winner = "you";
    }
    else if (playerMove == "paper" && computerMove == "scissors") {
        winner = "computer";
    }
    else if (playerMove == "paper" && computerMove == "rock") {
        winner = "you";
    }
    else if (playerMove == "rock" && computerMove == "paper") {
        winner = "computer";
    }
    else {
        winner = "error";
    }
    return winner;
}

function playTo(max) {
    console.log("Let's play Rock, Paper, Scissors");
    if (max == null) {
        max = prompt("Please set the max score for the competition!", "Enter whole number here.");
        console.log("The max score is " + max +".");
        if (isNaN(max) || max - Math.floor(max) > 0) {
            console.log("You can't set max score to " + max + ". Let's set the max score to 5.")
            max = 5;
        }
    } else {
        console.log("The max score is " + max +".");
    }
    var playerWins = 0;
    var computerWins = 0;
    var tiedGames = 0;
    var error = 0;
    var total = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    // Instead of 5 times. We will play until either player or computer has won times the player chose.
    while (playerWins < max && computerWins < max) {
        var yourMove = getPlayerMove();
        var compMove = getComputerMove();
        var winner = getWinner(yourMove,compMove);
        if (winner == "you") {
            playerWins++;
            total++;
            console.log("You choose " + yourMove + ", computer chooses " + compMove + ". You win this game.");
            console.log("Your score: " + playerWins + " - Computer score: " + computerWins);
        }
        else if (winner == "computer") {
            computerWins++;
            total++;
            console.log("You choose " + yourMove + ", computer chooses " + compMove + ".\nComputer wins this game.");
            console.log("Your score: " + playerWins + " - Computer score: " + computerWins);
        }
        else if (winner == "tie") {
            tiedGames++;
            total++;
            console.log("You choose " + yourMove + ", computer chooses " + compMove + ".\nIt's a tied game.");
            console.log("Your score: " + playerWins + " - Computer score: " + computerWins);
        }
        else if (winner == "error") {
            error++;
            total++;
            console.log("You choose " + yourMove + ".")
            console.log("Waring! Please ONLY choose 'rock', 'paper', or 'scissors'.\nThis game won't count");
            console.log("Your score: " + playerWins + " - Computer score: " + computerWins);
        }
    }
    if (playerWins == max) {
        return "Total games played: " + total + ", there are " + tiedGames + " tied games and " + error + " error games." + "\nFinal score: You v.s. Computer: " + playerWins + " - " + computerWins + ".\nYou are the winner.";
    }
    else if (computerWins == max) {
        return "Total games played: " + total + ", there are " + tiedGames + " tied games and " + error + " error games." + "\nFinal score: You v.s. Computer: " + playerWins + " - " + computerWins + ".\nYou are the computer.";
    }
}
console.log(playTo());

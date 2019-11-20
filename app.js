"use strict";

// ● Declare an arrow function named randomDamage that has no parameters and returns a
// random integer between 1 and 10.
const randomDamage = () => {
    return (Math.floor(Math.random() * 10 + 1));
}
// ● Declare an arrow function named chooseOption that has two parameters named opt1
// and opt2. chooseOption does two things:
const chooseOption = (opt1, opt2) => {

        // ○ Declares and initializes a variable named randNum to either a 0 or 1, randomly.
    let randNum = (Math.round(Math.random()));
        // ○ Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary
        // operator)
    return ((randNum === 0) ? opt1 : opt2);
}

// ● Declare a function expression named attackPlayer that has one parameter named
// health which returns a number equal to health minus the product of the
// randomDamage function.
const attackPlayer = (health) => {
    return health -= randomDamage();
}

// ● Declare an arrow function named isDead that has one parameter named health
// which returns a boolean value of true or false based on the following condition: health
// <= 0;
let isDead = (health) => {
    return ((health <= 0) ? true : false);
}

// ● Declare a function declaration named fight that has four parameters.
// ○ Parameters:
// ■ player1 - this will hold the name of the first player
// ■ player2 - this will hold the name of the second player
// ■ player1Health - this will hold the health of the first player
// ■ player2Health - this will hold the health of the second player
function fight(player1, player2, player1Health, player2Health) {

    // ○ Within the fight function, write a while loop that loops while true
    while (true) {
        // ■ Declare and initialize a variable named attacker equal to the
        // chooseOption function with player1 and player2 as arguments.
        let attacker = chooseOption(player1, player2);

        
        // ■ Has an if statement that is triggered when attacker is equal to player1.
        // ● Set player2Health equal to the product of attackPlayer with
        // player2Health as its argument.
        // ● Calls the logHealth function with player2 and player2Health
        // as its arguments.
        // ● Has an if statement that runs if the product of isDead, with
        // player2Health as an argument, equates to true. If true:
        // ○ Call the logDeath function with player1 and player2 as
        // arguments.
        // ○ Break
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }

        }

        // ■ Has an else statement that:
        // ● Sets player1Health equal to the attackPlayer function with
        // player1Health as its argument.
        // ● Call the logHealth function with player1 and player1Health as
        // its arguments.
        // ● Has an if statement that runs if the product of isDead with
        // player1Health as an argument equates to true. If true:
        // ■ Call the logDeath function with player2 and
        // player1 as arguments.
        // ■ Break
        else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}

// ● Declare an arrow function named logHealth that has two parameters named player
// and health which has a console.log method to state the following message: “player
// health: health”.
const logHealth = (player, health) => {
    console.log(player + ' health:' + health);
}

// ● Declare an arrow function named logDeath that has two parameters named winner
// and loser which has a console.log method to state the following message: “winner
// defeated loser”
let logDeath = (winner, loser) => {
    console.log(winner + ' defeated ' + loser);
}






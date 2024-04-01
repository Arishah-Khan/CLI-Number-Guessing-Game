#! /usr/bin/env node

import inquirer from "inquirer";

// 1: Computer will generate a random number:

const randomNumber = Math.floor(Math.random() * 6 )+ 1;

console.log("Welcome to the number guessing game!")

// 2: user input for guessing number: 

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);

// 3: compare user input with computer generated number and show result

if (answers.userGuessedNumber === randomNumber){
    console.log("Congrats, you guessed the right number!")
}
else{
    console.log("Sorry, you guessed the wrong number!")
}
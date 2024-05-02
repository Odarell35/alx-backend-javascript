// Importing the 'readline' module to interact with user input
const readline = require('readline');

// Creating an interface to read user input from stdin and write output to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to Holberton School, what is your name?");

rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    console.log("This important software is now closing");
    // Closing the readline interface
    rl.close();
});

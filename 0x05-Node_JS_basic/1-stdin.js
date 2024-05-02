// Importing the 'readline' module to interact with user input
const readline = require('readline');

// Creating an interface to read user input from stdin and write output to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Displaying a welcome message
console.log("Welcome to Holberton School, what is your name?\n");

// Listening for user input
rl.on('line', (input) => {
    // Displaying the user's name
    console.log(`Your name is: ${input}`);

    // Displaying closing message
    console.log("This important software is now closing\n");

    // Closing the readline interface
    rl.close();
});


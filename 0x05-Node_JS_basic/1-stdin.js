// Importing the 'readline' module to interact with user input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Holberton School, what is your name?\n");

rl.on('line', (input) => {
	if (input !== null)console.log(`Your name is: ${input}`);
	});
rl.on('line', (output) => {
	console.log("This important software is now closing");
	});

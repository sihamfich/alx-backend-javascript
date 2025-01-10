const readline = require('readline');

// Create an interface to read input from stdin
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for user input and process it
userInput.question('Welcome to ALX, what is your name?\n', (input) => {
  console.log(`Your name is: ${input}`);
  userInput.close();
});

// Display a closing message when the user exits
userInput.on('close', () => {
  if (process.stdin.isTTY) {
    // If input is from a terminal (not piped input), show the closing message
    console.log('This important software is now closing');
  }
});

// Handle EOF (Ctrl+D) and empty input
process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit();
});

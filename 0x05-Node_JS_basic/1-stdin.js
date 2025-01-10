process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (input) => {
  // Convert input from buffer to string and remove newline
  const name = input.toString().trim();

  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

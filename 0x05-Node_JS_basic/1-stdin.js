process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
}); // Properly close the 'readable' event listener

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

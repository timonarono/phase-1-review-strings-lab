// Write your code in this file!
const currentUser = 'Grace Hopper' ;
// with string concatenation const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!' ;
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`
import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}`);
};
export default greeting;

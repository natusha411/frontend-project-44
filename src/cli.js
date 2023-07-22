
import readlineSync from 'readline-sync';

function askAboutName() {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Welcome to the Brain Games!');
    console.log(`Hello, ${userName}!`);
}
export default askAboutName;
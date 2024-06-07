import {lineSelector} from "./wordList.js"
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function questionCLI() {
  return new Promise((res) => {
    rl.question('What word shall we search? ', (input) => {
      lineSelector(input.toLowerCase());
      res()
    });
  })
}

async function run_user_input() {
  while(true) {
    await questionCLI()
    console.log()
  }
}

run_user_input()

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Dag = parseFloat( await userInput.question("Hoeveel aantal dagen????"));
let Uur = parseFloat( await userInput.question("HOeveel aantal Uren?"));
let Min = parseFloat( await userInput.question("Hoeveel aantal minuten?"));
let Sec = parseFloat( await userInput.question("Hoeveel aantal seconden?"));
let totaal = ((Dag * 86400)+ (Uur*3600)+ (Min*60)+ Sec);
console.log(`Aantal seconde = ${totaal} .`);

process.exit();
const readline = require('readline');
const { levenshteinDistance } = require('./levenshtein.js');
const { soundexAlgo } = require('./soundex.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter name1: ', (name1) => {
  rl.question('Enter name2: ', (name2) => {
    // Call the functions with the input names
    console.log("\n--- Analysing for Levenshtein Distance ---")
    levenshteinDistance(name1, name2);
    console.log("\n--- Analysing for Soundex Algorithm ---")
    soundexAlgo(name1, name2);

    rl.close();
  });
});

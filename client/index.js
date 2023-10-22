const axios = require('axios');
const readline = require('readline');

const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');


const serverUrl = 'http://localhost:1225';

async function main() {
  // Create a readline interface to get user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompt the user for their name
  rl.question('Enter your name: ', async (name) => {
    // Close the readline interface
    rl.close();
    
    // Make an HTTP request to the server with the user's name
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      name: name,
    });

    console.log({ gift });
  });
}

main();
import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

if(process.argv.length < 3 || ['alice', 'bob'].includes(process.argv[2]) == false){
  console.log(`Usage: reach run index [seller|buyer]`);
  process.exit(0);
}
const role = process.argv[2];
console.log(`Your role is ${role}`);

const stdlib = loadStdlib(process.env);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const startingBalance = stdlib.parseCurrency(100);
const showBalance = async (acc) => console.log(`Your balance is ${toSU(await stdlib.balanceOf(acc))}.`);
const OUTCOME = ['Your number is not a match', 'Your number matches!']


const Shared = {
  getNum: async (numTickets) => {
    const num = await ask.ask(`What number do you pick?`, JSON.parse);
    return num;
  },
  seeOutcome: (num) => {
    console.log(`The outcome is ${OUTCOME[num]}`);
  },
}

//Seller
if (role === 'alice'){
    const aliceInteract = {
    ...stdlib.hasRandom,
    ...Shared,
    startRaffle: () => {
      console.log(`The Raffle information is being sent to the contract`);
      return nftParams;
    },
    seeHash: async (value) => {
      console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`);
      console.log(`Winning number HASH: ${value}`);
    }

    };

    const acc = await stdlib.newTestAccount(startingBalance);
    const ctc = acc.contract(backend);
    console.log(`Launching...`);
    console.log(`Creator is creating the testing NFT`);
    const theNFT = await stdlib.launchToken(acc, "Mona Lisa", "NFT", {supply: 1});
    const nftParams = {
    nftId: theNFT.id,
    numTickets: 10,
    };
    await ctc.participants.Alice(aliceInteract);
    await showBalance(acc);

} else {
    const BobInteract = {
    ...stdlib.hasRandom,
    ...Shared,
    showNum: (num) => {
      console.log(`Your raffle number is ${num}`);
    },
    seeWinner: (num) => {
      console.log(`The winning number is ${num}`);
    }
    }

    const acc = await stdlib.newTestAccount(startingBalance);
    const info = await ask.ask('Paste contract info:', (s) => JSON.parse(s));
    const ctc = acc.contract(backend, info);
    await showBalance(acc);
    await ctc.p.Bob(BobInteract);
    await showBalance(acc);

};

ask.done();

// const startingBalance = stdlib.parseCurrency(100);

// const [ accAlice, accBob ] =
//   await stdlib.newTestAccounts(2, startingBalance);
// console.log('Hello, Alice and Bob!');

// console.log('Launching...');
// const ctcAlice = accAlice.contract(backend);
// const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

// console.log(`Creator is creating the testing NFT`);
// const theNFT = await stdlib.launchToken(accAlice, "Mona Lisa", "NFT", {supply: 1});
// const nftParams = {
//   nftId: theNFT.id,
//   numTickets: 10,
// };
// // const OUTCOME = ['Your number is not a match', 'Your number matches!']

// await accBob.tokenAccept(nftParams.nftId);


// console.log('Starting backends...');
// await Promise.all([
//   backend.Alice(ctcAlice, {
//     ...stdlib.hasRandom,
//     ...Shared,
//     startRaffle: () => {
//       console.log(`The Raffle information is being sent to the contract`);
//       return nftParams;
//     },
//     seeHash: (value) => {
//       console.log(`Winning number HASH: ${value}`);
//     }
//     // implement Alice's interact object here
//   }),
//   backend.Bob(ctcBob, {
//     ...stdlib.hasRandom,
//     ...Shared,
//     showNum: (num) => {
//       console.log(`Your raffle number is ${num}`);
//     },
//     seeWinner: (num) => {
//       console.log(`The winning number is ${num}`);
//     }
//     // implement Bob's interact object here
//   }),
// ]);

// console.log('Goodbye, Alice and Bob!');

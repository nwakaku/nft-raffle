import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';

const stdlib = loadStdlib(process.env);

//create test account
const startingBalance = stdlib.parseCurrency(1000);
const acc = await stdlib.newTestAccount(startingBalance);

//Set up functions for checking balance
const fmt = (x) => { return ( stdlib.formatCurrency(x, 6) * 1000000); }

const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance()
console.log(`Your starting balance is:` + before)
console.log(`Your address is ${acc.getAddress()}`)

const Common = {
  random : () => stdlib.hasRandom.random(),
};

//Define interact for Alice
const Alice = {
  ...Common,
  getNum: async (numTickets) => {
    console.log(fmt(numTickets), "tickets have been created.");
    const num = Math.floor(Math.random() * numTickets);
    console.log(`the winning number is`, num);
     return num;
  },
  displayHash: async (value) => {
    console.log(`Winning number HASH: ${value}`);
  },
  displayWinner: async (address) => {
    console.log(`you have won the raffle draw, your NFT balance is`, fmt(await stdlib.balanceOf(address, nft.id)))
  },
  usersDraw : (address, draw) => {
    console.log('A contestant with address', address, 'just submitted a draw of', fmt(draw));
  },
  noWinner: () => {
    console.log('No player won this round!!!')
    process.exit(1);
  }
  // checkResult

}

// const Bob = {
//   ...Common,
//   const nftId = await ctc.apis.Bob.subscribeToNFT();

// }

//Program starts here
const Main = async () => {

    const isAlice = await ask(
      `Are you alice?`,
      yesno
    )

    const who = isAlice ? 'Alice' : 'Bob';
    console.log(`Starting as ${who}`);

    //Contract gets initialized here
    let ctc = null;

    if(isAlice){
    console.log(`Creator is creating the testing NFT`);
    const theNFT = await stdlib.launchToken(acc, "Mona Lisa", "NFT", {supply: stdlib.parseCurrency(1)});
    // const nftParams = {
    // nftId: theNFT.id,
    // numTickets: 10,
    // };
      ctc = acc.contract(backend);
      backend.Alice(ctc, {...Alice, startRaffle: async () => {
        const numTickets = await ask("How many tickets do you want to create?", parseInt );
    return [theNFT.id, numTickets];
  }});
      const info = JSON.stringify(await ctc.getInfo())
      console.log(info);
    } else {
      const info = await ask(
        `Please paste the contract information of the contract you want to connect to?`,
        JSON.parse
      );
      ctc = acc.contract(backend, info);
      console.log('Subscribing to NFT');
      const nftId = await ctc.apis.Bob.subscribeToNFT();
      await acc.tokenAccept(nftId);
      console.log('You have subscribed to the nft successfully.')

      const ticketsA = await ctc.apis.Bob.ticketsAvailable();
      console.log('Number of tickets available:', fmt(ticketsA));

      const random = Math.floor(Math.random() * ticketsA);

      console.log(`Your drew the ticket with number`, random);
      await ctc.apis.Bob.drawRaffleTicket(random);

      const interval = setInterval(async () => {
          const [ results, winner] = await ctc.apis.Bob.checkStatus();

          if (!results) {
            console.log("....results not out yet....wait");
          }
          else{
          if (winner){
            console.log("...Congratulations, you won!");
          }
          else {
            console.log("you lost! Better luck next time.");
          }

          clearInterval((interval))
          process.exit(1);
          } 
      }, 5000)
    }
}

await Main();
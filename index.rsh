'reach 0.1';

const amt = 1;

const Shared = {
  getNum : Fun([UInt], UInt),
  // seeOutcome : Fun([UInt], Null),
}

export const main = Reach.App(() => {
  // setOptions({ untrustworthyMaps: true });

  const [isOutcome, WINNER,  CONTINUE, TICKETS_FINISHED] = makeEnum(3);

  const Alice = Participant('Alice', {
    ...Shared,
    startRaffle: Fun([], Tuple(Token, UInt)),
    // getNum: Fun([UInt], UInt),
    displayHash: Fun([Digest], Null),
    displayWinner: Fun([Address], Null),
    // displayWinnerBalance: Fun([Address], Null),
    noWinner: Fun([], Null),
    usersDraw: Fun([Address, UInt], Null),
    ...hasRandom,
  });
  const Bob = API('Bob', {
    // ...Shared,
    subscribeToNFT: Fun([], Token),
    drawRaffleTicket: Fun([UInt], Null),
    ticketsAvailable: Fun([], UInt),
    checkStatus: Fun([], Tuple(Bool, Bool))
  });
  init();

  // The first one to publish deploys the contract
  Alice.only(() => {
    const [ nftId, numTickets ] = declassify(interact.startRaffle());
    const _winningNumber = interact.getNum(numTickets);
    const [_commitAlice, _saltAlice ] = makeCommitment(interact, _winningNumber);
    const commitAlice = declassify(_commitAlice);
  })
  Alice.publish(nftId, numTickets, commitAlice);
  Alice.interact.displayHash(commitAlice);
  commit();

  Alice.pay([[amt, nftId]]);

  commit();

  Alice.publish();

  const submissions = new Map(Address, UInt);
  const player = new Set();

  commit();

  Alice.only(() => {
    const winningNumber = declassify(_winningNumber);
    const saltAlice = declassify(_saltAlice);
  });

  Alice.publish(saltAlice, winningNumber);
  checkCommitment(commitAlice, saltAlice, winningNumber);

  const [ numOfDraws, outcome, addressToPay, numOfChecks ] = 
    parallelReduce([ 0, CONTINUE, Alice, 0 ])
      .invariant( balance(nftId) ==  1)
      .invariant(submissions.size() == numOfDraws)
      .while((numOfDraws < numTickets) && ((outcome == CONTINUE) || (outcome == TICKETS_FINISHED)) && (numOfChecks < numTickets))
      .api_(Bob.subscribeToNFT, () => {
        check(this != Alice, "Not Alice");

        return [0, (resolve) => {
          resolve(nftId)

          return [numOfDraws, CONTINUE, Alice, numOfChecks]
        }]
      })
      .api_(Bob.ticketsAvailable, () => {
        check(this != Alice, "Not Alice");

        return [0, (resolve) => {
          resolve(numTickets)

          return [numOfDraws, CONTINUE, Alice, numOfChecks]
        }]
      })
      .api_(Bob.drawRaffleTicket, (draw) => {
        check(this != Alice, "Not Alice");
        check(isNone(submissions[this]), "Already made a draw")

        return [ 0, (resolve) => {
          resolve(null);

          submissions[this] = draw;

          Alice.interact.usersDraw(this, draw);

          if ((numOfDraws + 1) == numTickets) {
            return [numOfDraws + 1, TICKETS_FINISHED, Alice, numOfChecks];
          }
          else {
            return [ numOfDraws + 1, CONTINUE, Alice, numOfChecks];
          }
        }]
      })
      .api_(Bob.checkStatus, () => {
        check(this != Alice, "Not Alice");
        check(isSome(submissions[this]), "You have not made any draw yet!");
        check(!player.member(this), "You have checked your status already");

        return [0, (resolve) => {
          if (outcome == CONTINUE) {
            resolve([false, false]);
            return [numOfDraws, outcome, addressToPay, numOfChecks]
          }
          else {
            player.insert(this);

            if (submissions[this] == winningNumber) {
              resolve([true, true]);
              return [numOfDraws, WINNER, this, numOfChecks + 1];
            }
            else {
              resolve([true, false]);
              return [numOfDraws, TICKETS_FINISHED, addressToPay, numOfChecks + 1]
            }
          }
        }]
      })
  commit();

  if (addressToPay == Alice) {
    Alice.interact.noWinner();
  }
  else {
    Alice.interact.displayWinner(addressToPay);
  }

  Alice.publish();

  transfer(balance(nftId), nftId).to(addressToPay);

  transfer(balance()).to(Alice);

  Alice.interact.displayWinner(addressToPay); 

  commit();

  exit();
});

const sha256 = require('sha256');

function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
}

/*This method creates a new block. Inside of this block, we have
our tansactions and the new transactions that have been created
since our last block was mined. After we've created a new block
let's clear out the new transactions, push the new block into our
chain, and simply return our new block*/
Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash){
  const newBlock = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.pendingTransactions,
      nonce: nonce,
      hash: hash,
      previousBlockHash: previousBlockHash,
  };
  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
  const newTransaction = {
      amount: amount,
      sender: sender,
      recipient: recipient,
  };
  this.pendingTransactions.push(newTransaction);
};

Blockchain.prototype.hashBlock = function(previousBlockHash,
currentBlockData, nonce){
    const dataAsString = previousBlockHash + nonce.toString()+ JSON.stringify(currentBlockData);

    const hash = sha256(dataAsString);
    return hash;
};

module.exports = Blockchain;

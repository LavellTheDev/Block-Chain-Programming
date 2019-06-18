function Blockchain() {
  this.chain = [];
  this.newTransactions = [];
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
    transactions: this.newTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash,
  };
  this.newTransaction = [];
  this.chain.push(newBlock);
  return newBlock;
}

module.exports = Blockchain;

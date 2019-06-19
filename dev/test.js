//calls the blockchain.js file V
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain ();

bitcoin.createNewBlock(789457, 'OIUEDJETH8754DHKD', "78SHNEG45DER56");

bitcoin.createNewTransaction(100, 'ALEXHT8455J5TKCJ2', 'JENN5BG5DF6HT8NG9');

bitcoin.createNewBlock(548764, 'AKMC875E6S1RS9', 'WPLS214R7T6SJ3G2');


console.log(bitcoin.chain[1]);

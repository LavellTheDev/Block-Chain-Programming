//calls the blockchain.js file V
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain ();

bitcoin.createNewBlock(2390, '98DH23JSK10KS', '89s18d5x7dsf');
bitcoin.createNewBlock(2390, 'OIUOEREDHKHKF', '71h45f3x7dsf');
bitcoin.createNewBlock(2390, '09MM35DHF1200', '66s11d2x7dsf');


console.log(bitcoin);

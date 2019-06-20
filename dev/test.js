//calls the blockchain.js file V
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain ();

bitcoin.createNewBlock(789457, 'OIUEDJETH8754DHKD', "78SHNEG45DER56");

bitcoin.createNewTransaction(100, 'LillT8455J5TKCJ2', 'Perc5BG5DF6HT8NG9');

bitcoin.createNewBlock(789457, 'AMCKDJETH8754DHKD', "78LOH D45DER56");

bitcoin.createNewTransaction(50,'LillHT845SJ5TKCJ2','Perc5BG5DF6HT8NG9');
bitcoin.createNewTransaction(200,'ALEXHT845SJ5TKCJ2','Perc5BG5DF6HT8NG9');
bitcoin.createNewTransaction(300,'ALEXHT845SJ5TKCJ2','Perc5BG5DF6HT8NG9');

bitcoin.createNewBlock(789457, 'AMCKDJETH8754DHKD', "78LOH D45DER56");

console.log(bitcoin.chain[2]);

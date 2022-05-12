require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index rule stick mistake good kangaroo army gentle'; 
let testAccounts = [
"0x461cc202779fe2885ed35d216203767f22559e5ba1c9567fc6397564bbcc7e1c",
"0x49699c20a5345fae268ae851d619a38e7457acacf30d4a63bfba8f77056346c6",
"0x849f1a7240d956f2ca3a3ed3e37a036018d4f76beab691eaefe7844892437dbc",
"0xa418d6f63a184e5edff2b280c5117c1c18774f0b01dea5d588d3021e374ba9bf",
"0x6bbd90e7d64e5d60be2d69538c0623bd316c4559da41c6a1c8f95c9ac3c9f5df",
"0xb330a7a463f60a317282d8ef87ec422f8a79c5f2cd380ea718a850329e4f16cf",
"0xd52fd0c749d3b4d0e2dbe9bf1a7d38c4bb10338af5f55d82d9ad54df046923cc",
"0x1072d444bc3b8015f419abb6dd523abb2bca6aa9c801b7c378ec948ee3dd7f17",
"0x2cbcb61e1605b04cdd062d64455f439abb00a0aa9421fd7cad99be4adf8feba4",
"0x92fd54f4db4a56375a48d77521bd3b3cfe3ed71f68a1e18db87475458a6cd090"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


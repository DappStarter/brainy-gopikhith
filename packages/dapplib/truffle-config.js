require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name recipe saddle artwork hidden drive fringe spatial'; 
let testAccounts = [
"0x2afe5f3f49ab2058c01f094306c67e73b7b6462c2b1bdf2a5e716aec2b19974a",
"0x3af973fd357ac79aa743806b9ec3b3f1eafb5ef6d87973db84602b8d31b51e13",
"0xf54f5914079f97c5d31ac994d476710dad6c399d7e355de2862d45d0f18d4ef4",
"0x9b94ed2187c10f707c2b1a659ed81358187265652042ff872ec104dd618aee62",
"0xe6be0846dbda3b37f2340749e823b93b14efec855c5f3d41c0ea7ec2d056afad",
"0x746fe6602c91249240b836aa7f729465249dcc9e699238cd66d24bea179e8b41",
"0xa1b22d63c56e1b1a1cf371569750be4aa1d332fc44709b17bac7010ba74771be",
"0xe96c976ab2ae11e1a4019348ce51b294654c7097162567a1b22b2ebfed61b81b",
"0x478d9f5a5b8eac545fa78ca6f9d870b5bb21ac2939b9edacd3ba47744a5e83cb",
"0x3dcc5741e1a82ce52135d79d70f268c2a6c436b7bca815d2d4d008270451d25b"
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
            version: '^0.5.11'
        }
    }
};

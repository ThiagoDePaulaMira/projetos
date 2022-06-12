
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/2z7iIdNOE9W-PamhVFfMBsUkHaSAvVrf',
      accounts: [ '14fe67263479915922a52ab4526cb187ffb9ff9f1ee76ef49990250170f3890d' ]
    }
  }
}
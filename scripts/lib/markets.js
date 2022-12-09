// Chainlink feeds
exports.chainlinkFeeds = {
  ETH: '0xB8C458C957a6e6ca7Cc53eD95bEA548c52AFaA24',
  USDC: '0x9BB8A6dcD83E36726Cc230a97F1AF8a84ae5F128',
  BTC: '0x65E8d79f3e8e36fE48eC31A2ae935e92F5bBF529'
};

exports.MARKETS = {
  'ETH-USD': {
    name: 'Ethereum / U.S. Dollar',
    category: 'crypto',
    maxLeverage: 50,
    maxDeviation: 10000, // TEST on local only
    chainlinkFeed: this.chainlinkFeeds['ETH'],
    fee: 10, // 0.1%
    liqThreshold: 9900,
    allowChainlinkExecution: true,
    isClosed: false,
    isReduceOnly: false
  },
  'BTC-USD': {
    name: 'Bitcoin / U.S. Dollar',
    category: 'crypto',
    maxLeverage: 50,
    maxDeviation: 10000, // TEST on local only
    fee: 10,
    chainlinkFeed: this.chainlinkFeeds['BTC'],
    liqThreshold: 9900,
    allowChainlinkExecution: true,
    isClosed: false,
    isReduceOnly: false
  },
  'EUR-USD': {
    name: 'Euro / U.S. Dollar',
    category: 'fx',
    maxLeverage: 100,
    maxDeviation: 10000, // TEST on local only
    fee: 3,
    chainlinkFeed: '0xa14d53bc1f1c0f31b4aa3bd109344e5009051a84',
    liqThreshold: 9900,
    allowChainlinkExecution: true,
    isClosed: false,
    isReduceOnly: false
  },
  'XAU-USD': {
    name: 'Gold / U.S. Dollar',
    category: 'commodities',
    maxLeverage: 20,
    maxDeviation: 10000, // TEST on local only
    fee: 10,
    chainlinkFeed: '0x1f954dc24a49708c26e0c1777f16750b5c6d5a2c',
    liqThreshold: 9500,
    allowChainlinkExecution: true,
    isClosed: false,
    isReduceOnly: false
  },
  // 'SPX500': {
  //   name: 'S&P 500',
  //   category: 'indices',
  //   maxLeverage: 20,
  //   maxDeviation: 10000, // TEST on local only
  //   fee: 10,
  //   chainlinkFeed: this.ADDRESS_ZERO,
  //   liqThreshold: 9500,
  //   allowChainlinkExecution: true,
  //   isClosed: false,
  //   isReduceOnly: false
  // }
};
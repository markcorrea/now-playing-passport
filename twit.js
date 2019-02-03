var Twit = require('twit')

/* This sets the Twitter credentials to connect with the BINowPlaying login. */
var T = new Twit({
  consumer_key: 'jvP3INkCviLvMAuAust6dnqhF',
  consumer_secret: 'W4DPPrqExxFMo0keeRIi1HBiLvtjVNZD1SEBojvovsqMDhN2du',
  access_token: '1092110042566983681-AnvnLcySFXh5Vq0NGQhVL4mE6BtKWg',
  access_token_secret: '0T8f1K9sBtB5NUUdsnpkNWfp06omEubz2XRHiX51WW1JY',
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
})

module.exports = T

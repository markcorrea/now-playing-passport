var Twit = require('twit')

/* This sets the Twitter credentials to connect with the BINowPlaying login. */
var T = new Twit({
    consumer_key: 'CXVNsTDohsJaIxl0cjpuLKXYr',
    consumer_secret: 'Y49dNi2NPN9vJaPS95QnRLslOqisEuC7v934lHOfN05cVjbtDB',
    access_token: '2834545563-QYQqm8hnLPiU3eFyAD8SGtKhfIYW7gMp8fGh8Xd',
    access_token_secret: 'SUquQt3XC2ve3IIa8JbwMa4bsRCpZSJuCVKYAXLUTDBBT',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
  })

module.exports = T;


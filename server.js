const http = require('http')
const app = require('./app')
var T = require('./twit')

const port = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(port)

/* Websocket connection */
/* It basically starts the socket.io and starts checking for the posts */
/* with the hastag NowPlaying, using the statuses/filter streaming route. */
var io = require('socket.io').listen(server)
var stream = T.stream('statuses/filter', { track: '#NowPlaying' })

stream.on('tweet', function(tweet) {
  if (tweet.user != undefined) {
    io.emit('tweet', tweet)
  }
})

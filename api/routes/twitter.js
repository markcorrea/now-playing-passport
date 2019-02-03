var http = require('http')
const express = require('express')
const router = express.Router()
const T = require('../../twit')

/* The main route which sends the first load of posts on the feed. */
/* Also is the same route that sends the new loads when the Infinite Scrolling is activated. */
router.post('/search/tweets', (req, res, next) => {
  console.log(req.body)
  T.get('search/tweets', req.body, function(err, data, response) {
    let returnData = { statuses: [] }
    for (var i = 0; i < data.statuses.length; i++) {
      if (!data.statuses[i].truncated) {
        returnData.statuses.push(data.statuses[i])
      }
    }
    res.status(200).json(returnData)
  })
})

/* The route that publishes a new tweet to the BINowPlaying page. */
router.post('/tweet', (req, res, next) => {
  console.log(req.body)
  T.post('statuses/update', req.body, function(err, data, response) {
    console.log(data)
    res.status(200).json(data)
  })
})

module.exports = router

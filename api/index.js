var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  req.tag__author = 'Liu7'
  next()
})

router.get('/detail', function(req, res, next) {
  res.json({
    data: [
      {'tag__author': req.tag__author}
    ]
  });
});

router.post('/upload', function (req, res, next) {
	
})

module.exports = router

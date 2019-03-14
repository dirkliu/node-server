var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('users route change')
  next()
})

router.use(function (req, res, next) {
  console.log('users route change1')
  next()
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/detail', function(req, res, next) {
  res.send('respond with a resource detail');
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.post('/login', (req, res, next) => {
  res.json({
    code: 0,
    msg: 'success'
  })
})

module.exports = router

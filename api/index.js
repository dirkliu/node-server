const path = require('path');
const url = require('url');
var fs = require('fs');
var Mock = require('mockjs')

var express = require('express');
var router = express.Router();
var multer = require('multer');

var imweb = require('./imweb')
// var upload = multer({dest: 'uploads'});


router.use(function (req, res, next) {
  req.tag__author = 'Liu7'
  next()
})

router.use('/imweb', imweb);

router.get('/detail', function(req, res, next) {
  res.json({
    data: [
      {
				"tag__author": req.tag__author,
				"list": [{
					"id": 1,
					"name": "test"
				}]
			}
    ]
  });
})

router.get('/users', function (req, res, next) {
	res.json(Mock.mock({
		msg: 'ok',
		code: 0,
		'data|20': [{
			'id|+1': 1,
			'name|+1': [
				Mock.Random.cname(),
				Mock.Random.cname(),
				Mock.Random.cname()
			]
		}]
	}))
})

module.exports = router

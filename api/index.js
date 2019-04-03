var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
const path = require('path');
const url = require('url');

var upload = multer({dest: 'uploads'});

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

router.post('/imweb/login', (req, res, next) => {
  res.json({
    code: 0,
    msg: 'success'
  })
})

router.post('/upload', upload.any(), function (req, res, next) {
	var ext = path.extname(req.files[0].originalname)
	// res.json({
	// 	code: 0,
	// 	msg: 'success',
	// 	data: {
	// 		path: req.headers.host + '/' + req.files[0].filename
	// 	}
	// })
	var des_file = req.files[0].path + ext;
	fs.readFile(req.files[0].path, function (err, data) {
		fs.writeFile(des_file, data, function (err) {
			if (err) {
				console.log(err)
			} else {
				fs.unlink(req.files[0].path)
				console.log('req.files[0].filename:', req.files[0].filename)
				console.log('req.headers:', req.headers)
				res.json({
					msg: 'success',
					data: {
						path: 'http://' + req.headers.host + '/' + req.files[0].filename + ext
					}
				})
			}
		})
	})
})

module.exports = router

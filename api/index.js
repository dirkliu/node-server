var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
const url = require('url');

var upload = multer({dest: 'upload'});

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

router.post('/upload', upload.any(), function (req, res, next) {
	console.log('fileInfos:', req.files[0].path)
	res.json({
		code: 0,
		msg: 'success',
		data: {
			path: url.origin + '/' + req.files[0].path
		}
	})
	// var des_file = "upload/" + req.files[0].originalname;
	// fs.readFile(req.files[0].path, function (err, data) {
	// 	fs.writeFile(des_file, data, function (err) {
	// 		if (err) {
	// 			console.log(err)
	// 		} else {
	// 			res.json({
	// 				msg: 'success',
	// 				data: {
	// 					path: '5hdue7dr'
	// 				}
	// 			})
	// 		}
	// 	})
	// })
})

module.exports = router

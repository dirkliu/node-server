const fs = require('fs')
const path = require('path')
const Router = require('koa2-router')
const apiRouter = new Router()

const { logger } = require('../logger');

apiRouter.get('/', async (ctx, next) => {
  ctx.dbPool.getConnection((err, connection) => {
    if (err) throw err; 

    connection.query('SELECT * FROM blog', function (error, results, fields) {
      // When done with the connection, release it.
      connection.release();
  
      // Handle error after the release.
      if (error) throw error;
  
      // Don't use the connection here, it has been returned to the pool.
    });
  })
  ctx.body = [{
    name: 'liu',
    age: 14
  }]
})

apiRouter.post('/upload', async (ctx, next) => {
  const file = ctx.request.files.file
  if (!file || !file.name) {
    logger.error('请选择文件')
  }
  const reader = fs.createReadStream(file.path)
  const fileInfo = path.parse(file.name)
  const uploadFileName = path.join(__dirname, '../uploads', fileInfo.name + Date.now() + fileInfo.ext)
  const stream = fs.createWriteStream(uploadFileName)
  reader.pipe(stream)  
  ctx.redirect('/');
})

module.exports = apiRouter

const fs = require('fs')
const path = require('path')
const Router = require('koa2-router')
const apiRouter = new Router()

apiRouter.get('/', async (ctx, next) => {
  ctx.body = [{
    name: 'liu',
    age: 14
  }]
})

apiRouter.post('/upload', async (ctx, next) => {
  const file = ctx.request.files.file
  console.log('file:', file)
  const reader = fs.createReadStream(file.path)
  const fileInfo = path.parse(file.name)
  console.log('fileInfo:', fileInfo)
  const uploadFileName = path.join(__dirname, '../uploads', fileInfo.name + Date.now() + fileInfo.ext)
  const stream = fs.createWriteStream(uploadFileName)
  reader.pipe(stream)  
  ctx.redirect('/');
})

module.exports = apiRouter

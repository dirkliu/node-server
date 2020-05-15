const Router = require('koa2-router')
const apiRouter = new Router()

apiRouter.get('/', async (ctx, next) => {
  ctx.body = [{
    name: 'liu',
    age: 14
  }]
})

// apiRouter.post('/upload', async (ctx, next) => {
//   if ('POST' != ctx.method) return await next();
//   console.log('ctx.request:', ctx.request)
//   const file = ctx.request.files.file
//   const reader = fs.createReadStream(file.path)
//   const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()))
//   reader.pipe(stream)  

//   ctx.redirect('/');
// })

module.exports = apiRouter

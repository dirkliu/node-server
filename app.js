const path = require('path')
const Koa = require('koa')
const views = require('koa-views')
const router = new require('koa2-router')()
const controllers = require('./controllers')
const api = require('./api')

const app = new Koa()
// x-response-time
app.use(async(ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// logerr
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }))
router.use(controllers)
router.use('/api', api)
app.use(router)

app.listen(3000)

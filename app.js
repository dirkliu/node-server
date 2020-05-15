const path = require('path')
const Koa = require('koa')
const koaBody = require('koa-body');
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

// node版本
console.log('node version:', process.version)
// node及其依赖的版本
console.log('node versions:', process.versions)
// 项目的版本
console.log('koa version:', require('koa/package.json').version)

app.use(koaBody({ multipart: true }));

app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }))
router.use(controllers)
router.use('/api', api)
app.use(router)

app.listen(3000)

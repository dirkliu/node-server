const Koa = require('koa')
const app = new Koa()
const api = require('./api')

// x-response-time
app.use(async(ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// loger
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

// app.use(async ctx => {
//   ctx.body = 'Hello Koa';
// })
app.use(api)

app.listen(3000)
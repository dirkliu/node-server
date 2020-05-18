const path = require('path')
const Koa = require('koa')
const koaBody = require('koa-body');
const views = require('koa-views')
const router = new require('koa2-router')()
const controllers = require('./controllers')
const api = require('./api')
const app = new Koa()
const { logger, accessLogger } = require('./logger');

app.use(accessLogger())
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// node版本
// console.log('node version:', process.version)
// node及其依赖的版本
// console.log('node versions:', process.versions)
// 项目的版本
// console.log('koa version:', require('koa/package.json').version)

app.use(koaBody({ multipart: true }));

app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }))
router.use(controllers)
router.use('/api', api)
app.use(router)

app.on('error', function (err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

app.listen(3000)

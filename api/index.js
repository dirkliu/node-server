const Router = require('koa2-router')
const apiRouter = new Router()

apiRouter.get('/', async (ctx, next) => {
  ctx.body = [{
    name: 'liu',
    age: 14
  }]
})

module.exports = apiRouter

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = 'hello world'
})

router.get('/users', async (ctx, next) => {
  ctx.body = [{
    id: 1,
    name: 'uee'
  }, {
    id: 2,
    name: 'text'
  }]
})

module.exports = router.routes()

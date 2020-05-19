const Router = require('koa2-router')
const router = new Router()
router.get('/', async (ctx, next) => {
  ctx.body = 'hello world11222'
})

router.get('/user', async (ctx, next) => {
  await ctx.render('user', {
    user: {
      name: {
        first: 'Tobi',
        last: 'Holowaychuk'
      },
      species: 'ferret',
      age: 3
    }
  })
})

router.get('/upload', async (ctx, next) => {
  await ctx.render('upload',  {
  })
})

module.exports = router
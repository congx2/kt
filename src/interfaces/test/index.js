const Router = require('@koa/router')

const router = new Router({
  prefix: '/test'
})

const users = () => [
  { id: 1, name: 'Nikola', age: 18 },
  { id: 2, name: 'Tesla', age: 19 },
  { id: 4, name: 'NikolaTesla', age: 19 },
]

const cb = (ctx, next) => {
  const all = 'all'
  const id = (ctx.params.id || all).toLowerCase()
  console.log(ctx.params)
  console.log(id)
  const allUsers = users()
  const result = users => {
    ctx.body = { data: users }
    console.log(ctx.body)
    next()
  }
  if (id === all) {
    return result(allUsers)
  }
  const user = allUsers.find(item => (item.id).toString() === id)
  console.log(user)
  result(user || null)
}

router.get('/user/:id', cb)
router.post('/user/:id', cb)

export default router
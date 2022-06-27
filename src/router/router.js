
const Router = require('@koa/router')
import cors from '../middlewares/cors/index.js'
import userRouter from '../interfaces/test/index.js'


const router = new Router({
  prefix: '/api'
})

router.use(cors())
router.use(userRouter.routes(), userRouter.allowedMethods())
// const users = () => [
//   { id: 1, name: 'Nikola', age: 18 },
//   { id: 2, name: 'Tesla', age: 19 },
//   { id: 4, name: 'NikolaTesla', age: 19 },
// ]

// router.get('/user/:id', (ctx, next) => {
//   const all = 'all'
//   console.log(ctx.params)
//   const id = (ctx.params.id || all).toLowerCase()
//   console.log(id)
//   const allUsers = users()
//   console.log(allUsers)
//   const result = users => {
//     ctx.body = users
//     next()
//   }
//   console.log(id === all)
//   if (id === all) {
//     return result(allUsers)
//   }
//   const user = allUsers.find(item => (item.id).toString() === id)
//   console.log(user)
//   // ctx.body = users()
//   // next()
//   result(user || null)
// })

export default router

import useMiddlewares from './middlewares/index.js'
import useRouter from './router/index.js'

const Koa = require('koa')
const app = new Koa()

useMiddlewares(app)
useRouter(app)


export default app

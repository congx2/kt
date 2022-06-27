
const json = require('koa-json')
import cors from './cors/index.js'

const applyMiddlewares = app => {
  app.use(json())
  app.use(cors())
}

export default applyMiddlewares

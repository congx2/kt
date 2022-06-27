const koaCors = require('@koa/cors')
import allowOriginMap from './allow-origin.js'

const cors = () => {
  const allowMethods = [
    'GET',
    'HEAD',
    'POST',
    'PUT',
    'DELETE',
    /* 'CONNECT', */
    'OPTIONS',
    /* 'TRACE', */
    'PATCH'
  ]
  const origin = (ctx) => {

    const requestOrigin = ctx.get('Origin')
    const originName = allowOriginMap.has(requestOrigin) ? requestOrigin : 'default'
    console.log('requestOrigin: ', requestOrigin)
    console.log('originName: ', originName)
    console.log('cors: ', allowOriginMap.get(originName))
    return allowOriginMap.get(originName)
  }
  return koaCors({ allowMethods, origin })
}

export default cors

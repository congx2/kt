'use strict';

const whiteList = [
  'http://letconst.cn',
  'https://letconst.cn',
];

const allowOriginMap = new Map();
allowOriginMap.set('default', whiteList[1]);

whiteList.forEach(item => {
  allowOriginMap.set(item, item);
});

const koaCors = require('@koa/cors');

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
  ];
  const origin = (ctx) => {

    const requestOrigin = ctx.get('Origin');
    const originName = allowOriginMap.has(requestOrigin) ? requestOrigin : 'default';
    console.log('requestOrigin: ', requestOrigin);
    console.log('originName: ', originName);
    console.log('cors: ', allowOriginMap.get(originName));
    return allowOriginMap.get(originName)
  };
  return koaCors({ allowMethods, origin })
};

const json = require('koa-json');

const applyMiddlewares = app => {
  app.use(json());
  app.use(cors());
};

const Router$1 = require('@koa/router');

const router$1 = new Router$1({
  prefix: '/test'
});

const users = () => [
  { id: 1, name: 'Nikola', age: 18 },
  { id: 2, name: 'Tesla', age: 19 },
  { id: 4, name: 'NikolaTesla', age: 19 },
];

const cb$1 = (ctx, next) => {
  const all = 'all';
  const id = (ctx.params.id || all).toLowerCase();
  console.log(ctx.params);
  console.log(id);
  const allUsers = users();
  const result = users => {
    ctx.body = { data: users };
    console.log(ctx.body);
    next();
  };
  if (id === all) {
    return result(allUsers)
  }
  const user = allUsers.find(item => (item.id).toString() === id);
  console.log(user);
  result(user || null);
};

router$1.get('/user/:id', cb$1);
router$1.post('/user/:id', cb$1);

const Router = require('@koa/router');


const router = new Router({
  prefix: '/api'
});

router.use(cors());
router.use(router$1.routes(), router$1.allowedMethods());

const useRouter = app => {
  app.use(router.routes());
  app.use(router.allowedMethods());
};

const Koa = require('koa');
const app = new Koa();

applyMiddlewares(app);
useRouter(app);

const http = require('http');
const https = require('https');
const httpPort = 8007;
const httpsPort = 8008;

let count = 0;
const cb = () => {
  if (++count === 2) {
    console.log(`Http Server on: http://127.0.0.1:${httpPort}/`);
    console.log(`Https Server on: http://127.0.0.1:${httpsPort}/`);
  }
};
http.createServer(app.callback()).listen(httpPort, cb);
https.createServer(app.callback()).listen(httpsPort, cb);

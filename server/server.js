const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const leaseDb = require('./db/collection');

const app = new Koa();
const router = new Router({
  prefix: '/lease',
});

console.log('dfefaef');
const aa = leaseDb.insert();
console.log("gggggggg", aa.next());
console.log("qqqqq", aa.next());

app.use(bodyParser());

router.post('/submit/info', async (ctx, next) => {
  console.log('param', ctx.request.body);
  ctx.set('Content-Type', 'application/json')
  const result = {
    status: 0,
  }
  ctx.response.body = result;
})

app.use(router.routes());

app.listen(8089, () => {
  console.log('This server is running at http://localhost:' + 8089)
})
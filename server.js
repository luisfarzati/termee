const Koa = require("koa");

const app = new Koa();

app.use((ctx) => {
  const result = ctx.query.code?.toString();
  ctx.body = result;
});

app.listen(3000);

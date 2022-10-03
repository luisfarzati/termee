const Koa = require("koa");

const app = new Koa();

app.use((ctx) => {
  const result = eval(ctx.query.code);
  ctx.body = result;
});

app.listen(3000);

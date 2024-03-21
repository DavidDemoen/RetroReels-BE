//const config = require("./config");
const Koa = require("koa");

module.exports = async function createServer() {
  const app = new Koa();

  app.use(async (ctx, next) => {
    ctx.body = "Hello World!";
    await next();
  });

  return {
    getApp() {
      return app;
    },
    start() {
      return new Promise((resolve) => {
        const port = 9000;
        app.listen(port);
      });
    },
    async stop() {},
  };
};

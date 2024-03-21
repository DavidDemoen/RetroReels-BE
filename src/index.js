const createServer = require("./createServer");

async function main() {
  try {
    const server = await createServer();
    await server.start();

    async function onClose() {
      await server.close();
      process.exit(0);
    }
    process.on("SIGINT", onClose);
    process.on("SIGTERM", onClose);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
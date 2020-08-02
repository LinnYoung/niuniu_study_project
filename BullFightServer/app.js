const ws = require("nodejs-websocket");
let DB = require("./db");

const db = new DB();
let websocket = ws.createServer((client) => {
  console.log("new client connect!!!");
  client.on("text", (result) => {
    const message = JSON.parse(result);
    const type = message.type;
    const data = message.data;
    db.getUserInfo(data.id)
      .then((result) => {
        client.send(JSON.stringify({ type: "login_success", data: result[0] }));
      })
      .catch((err) => {
        console.log("err：", err);
      });
  });

  // 监听关闭
  client.on("close", (result) => {
    console.log("on close", result);
  });

  // 监听错误
  client.on("error", (err) => {
    console.log("on error", err);
  });
});

websocket.listen(3001);

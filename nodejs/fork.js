const { fork } = require("child_process");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/compute") {
    const compute = fork("compute.js");
    compute.send("start");
    compute.on("on", sum => {
      res.end(`Sum is ${sum}`);
    });
  } else {
    res.end("Ok");
  }
});
server.listen(3000);

// const forked = fork("child.js");
// forked.on("message", msg => console.log("Message from child", msg.counter));
// forked.send({ hello: "world" });

const http = require("http");
const axios = require("axios");

http
  .createServer(function (req, res) {
    axios.get("https://stowrt-node-example.fly.dev").then((resp) => {
      res.write(resp.data);
      res.end();
    });
  })
  .listen(8080);

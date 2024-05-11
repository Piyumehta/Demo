let http = require("http");
let url = require("url");
http
  .createServer((req, res) => {console.log(req.url);
    const data = url.parse(req.url, true);
    res.write("<h1>Welcome " + data.query.uname + "</h1>");
    res.end();
  })
  .listen(3000);
console.log("Server running on 3000");
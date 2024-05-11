var http = require("http");
var fs = require("fs");
http.createServer((req,res)=>
{
    fs.readFile("Task.html",function(err,data)
    {
        res.write(data);
        return res.end();

    })
}).listen(3000);
console.log("server running" );
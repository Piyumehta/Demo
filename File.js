var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer((req,res)=>
{
    
    const data = url.parse(req.url, true);
    console.log(data.path)
    fs.readFile("NodeJS.html",function(err,data)
    {if(err)
        {
            console.log(err)
        }
        console.log("Inside file read")
        res.write(data);
        return res.end();

    })
}).listen(3000);
console.log("server running" );
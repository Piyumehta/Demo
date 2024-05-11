var express = require("express")
var app = express();
app.get("/", (req, res) => {
    // res.send("welcome to express");
    res.sendFile(__dirname+"/NodeJS.html")
});
app.get("/about", (req, res) => {
    //res.send("this is about")
   //console.log(req,query);
    res.send("welcome"+req.query.username)
   // res.sendFile(__dirname+"/Task.html")
    //res.send({"name":"piyu"})
})
app.post("/contact", (req, res) => {
    //res.send("this is post request")
    res.sendFile(__dirname+"/Task1.html")
})
app.listen(3000, () => console.log("server running"));

const express =require("express");
const mycalculator = require ("./calculate");
const app = express();
app.get("/",(req,res)=>
{
  var x=5;
  var fx=mycalculator.factorial(x);
  var sx=mycalculator.square(x);
  res.send("factorial is "+fx+ "<br>"+"square is "+sx);
})
app.listen(3000,()=>console.log("server running"))
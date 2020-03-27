var express = require("express");
var app = express();

app.get('/',function(req,res)
{
    res.sendfile('login.html');

})

app.get('/home',function(req,res)
{
    res.sendfile('home.html')
})

 app.get('/registration',function(req,res)
 {
     res.sendfile('registration.html')
 })

app.listen(4000,()=>
{
    console.log("server is running");
})
var express=require("express");
var app=express();
app.set("view engine", "ejs");
var bodyParser=require("body-parser");
var mongo = require('mongodb');

app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
   res.render("landing"); 
});


app.get("/login", function(req, res){
   res.render("login"); 
});

app.get("/signin", function(req, res){
   res.render("signin"); 
});

app.get("/details", function(req, res){
   res.render("details"); 
});



app.listen(process.env.PORT || 3000, function () {
  console.log('Server started...');
});
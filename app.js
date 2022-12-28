//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var posts = [];

app.get("/", function(req,res){
  res.render("about");
});

app.get("/blog", function(req,res){
  res.render("blog");
});

app.get("/members", function(req,res){
  res.render("members");
});

app.get("/compose", function(req,res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  
});

app.get("/posts/:postTitle", function(req, res){
  
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
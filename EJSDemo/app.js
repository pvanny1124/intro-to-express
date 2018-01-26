var express = require("express");
var app = express();

//tell express to serve the public folder to get app.css for all ejs templates
app.use(express.static("public"));

//tell express that we are going to work with ejs so that we dont use the ".ejs" surname for 
//referenecing .ejs all the time in the render() function
app.set("view engine", "ejs");

app.get("/", function(req, res){
    //express automatically looks for a "views" directory for ejs files (embedded javascript)
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    //:thing is a route param
    //can be accessed from req.params as follows:
    var thing = req.params.thing;
    //send "thing" to ejs by passing it in as a value to the thingVar 
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Suzy"},
        {title: "My second post", author: "Ronald"},
        {title: "My third post", author: "Patrick"}
    ];
        res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS LISTENING");
});
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"]; //sample space

//in order to parse express body code to js, use this
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    //instead of opening up to /addfriends, stay in /friends
    res.redirect("/friends");   
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER STARTED");
})
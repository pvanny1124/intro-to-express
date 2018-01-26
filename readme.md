Introduction to Express

1) Require express
2) set app equal to express()
3) write app.use(express.static("public")); to tell express to serve the public folder where all the ejs templates  and css reside
3) add app.listen at the bottom

requiring express:

    var express = require("express");
    
using express:

    var app = express();
    
tell express to serve the public folder to get app.css for all ejs templates:

    app.use(express.static("public"));
    
tell express we will be working with ejs templates so that we dont have to include the .ejs extension:

    app.set("view engine", "ejs");
    
basic routes:

    app.get("/", function(req, res){})
    --req: request
    --res: response
    --"/" == the root route
    
route params:

    "/:thing"
    --anything that comes after a ":" is a route param and can be taken and used from the req.params object
    --ex: req.params.thing
    
app listen for PORT and IP environment variables to start server:

    app.listen(process.env.PORT, process.env.IP, function(){
        //add console log to tell user that server is now listening and handle any errors that can come
    });
    
passing variables to an ejs template:

    res.render("<ejs-template>", {<name-of-variable>: thing});
    --passing thing to an object that is passed to the ejs template for use in that file.

PARTIALS:
To dry up code, we can create separate header/footer files in ejs and save them under views/partials.
To include them in our other ejs templates, we use the following:

    <% include <path>/header %>
    <% include <path>/footer %>
    
In order to parse express body code to js, use this:

    app.use(bodyParser.urlencoded({extended: true}));
    --Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.
    --A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).

    
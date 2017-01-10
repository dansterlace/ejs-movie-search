var express = require("express");
var app = express();
var request = require("request");



app.get("/results", function(req, res){
    request('http://www.omdbapi.com/?s=california', function(error, response, body){
        if(!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app has started.");
});
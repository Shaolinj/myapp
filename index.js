const express = require("express");
const port = process.env.PORT || 8000;

const app = express();


app.get("/", function(req, res){
    res.send("Hi From Admin");
});


app.listen(port, function() {
    console.log("Server Connected");
});

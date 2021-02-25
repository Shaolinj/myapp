const express = require("express");
const port = process.env.PORT || 8000;

const app = express();


app.get("/", function(req, res){
    res.send("Hey Good GitHub");
});


app.listen(port, function() {
    console.log("Server Connected");
});

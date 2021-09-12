const express = require('express')
const app = express();


app.listen(process.env.PORT, function(){
    console.log("server is running")
})

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post('/', function(req, res){
    
})

module.exports.app = app;
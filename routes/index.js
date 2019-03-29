var express = require('express')
var app = express()

app.get('/',function(req, res){
    res.render('index1', {title: 'minoush cuisner ', name: "kkkk"})
})

module.exports = app;
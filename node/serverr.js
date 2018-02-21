var express=require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app= express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded());
app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname,'/../pro.html'));
});


app.post('/url',function (req,res) {
    console.log(req.body);
    res.sendFile(path.join(__dirname,'/../pro.html'));
});
app.listen(3000, function () {
    console.log('server working2');
} );
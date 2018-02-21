
var express=require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app= express();


var users=[{id:'User1',password:'1111'},
       {id:"User2",password:"2222"},
       {id:"User3",password:"3333"}];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/login',function (req,res) {
    res.sendFile(path.join(__dirname,'/../Login.html'));
});
app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname,'/../t3.html'));
});

app.post('/login',function (req,res) {
    console.log(req.body);
    var l=req.body.userLogin.toString();
    var p=req.body.pass.toString();
    for(i in users){
        if(users[i].id==l&&users[i].password==p){
            res.sendFile(path.join(__dirname,'/../t3.html'));
        }
    }
    console.log();




});

app.listen(8181, function () {
    console.log('server working');
} );


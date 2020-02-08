var bodyParser=require("body-parser");
var express=require("express");
var path=require("path");

var app=express();
var PORT=process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/static', express.static(__dirname + './js/'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/notes',function(req,res){
    res.sendFile(path.join(__dirname+'/notes.html'));
});

app.post('/api/notes',function(req,res){
res.send("posting");
   
    
});


app.listen(PORT,function(){
    console.log("App is listening on PORT: "+PORT);
});

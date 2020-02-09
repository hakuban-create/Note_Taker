var bodyParser=require("body-parser");
var express=require("express");
var path=require("path");
var fs=require("fs");

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

    fs.readFile('./db.json', function (err, data) {
    var json = JSON.parse(data);
    json.push(req.body);
    fs.writeFile("./db.json",JSON.stringify(json,null,2),function(err){
       if(err) throw err;
       console.log("Saved!");
   }) 
});
});

app.get('/api/notes', function(req,res){
    fs.readFile('./db.json', function (err, data) {
    res.send(JSON.parse(data));
    });
});


app.listen(PORT,function(){
    console.log("App is listening on PORT: "+PORT);
});


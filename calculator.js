const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1+n2;
    res.send("Result is "+result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    var bmi = w/Math.pow(h,2);
    res.send("your BMI is "+ bmi);
});

app.listen(3000,function(){
    console.log("server started on port 3000");
});
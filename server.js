var express=require('express');
var app=express();
app.use((express.static('public')));

app.get("/",(req,res)=>{
    res.send("Welcome tp iet");
    
})
app.listen(8000);
console.log("App is listening on 8000");
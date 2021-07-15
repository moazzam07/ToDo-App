var express = require("express");
var app = express()
app.set('view engine','ejs');

app.get('/' , (req,res)=>{
    res.render("list");
})

app.listen(3535,()=>{
    console.log("Server is running on port 3535");
})
const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const staticpath=path.join(__dirname,"../public");
const portno= process.env.PORT || 8000;
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");


app.use(express.static(staticpath));


//Set default engiine as hbs
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

//Routing
app.get("",(req,res)=>{
    res.render("index");
})


app.get("/about",(req,res)=>{
    res.render("about");
})


app.get("/weather",(req,res)=>{
    res.render("weather");
})


app.get("*",(req,res)=>{
    res.render("404errors");
})

app.listen(portno,()=>{
    console.log("Server is listening...");
});
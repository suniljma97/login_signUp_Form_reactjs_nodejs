var express = require("express");
const passport = require("passport");
let jwt=require("jsonwebtoken")
let JWTStrategy=require("passport-jwt").Strategy;
let ExtractJWT=require("passport-jwt").ExtractJwt;
var app = express();
var csvtojson = require('csvtojson');
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept,Authorization"
  );
    res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  next();
});
//var port = process.env.PORT || 2410;
app.use(passport.initialize());
var port=2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
const params={
    jwtFromRequest :ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : "sunil123",
}
let strategyAll=new JWTStrategy(params,function(token,done)
{
    console.log("In JWTStrategy-All",token);
    client.connect(function(err, client) {
        console.log("Get :/login");  
        const db = client.db(dbname);
        db.collection("users")
        .find()
        .toArray(function(err,docs){
            console.log(docs);
    let user=docs.find(u=>u.id===token.id);
    console.log("user",user);
    if(!user)
    return done(null,false ,{message : "Incorrect username or password"});
    else return done(null,user);
}) }) });
passport.use("roleAll",strategyAll);

const MongoClient = require('mongodb').MongoClient;
let ObjectId = require("mongodb").ObjectId;
const url = 'mongodb://localhost:27017';
const dbname = "dbUser";
const client = new MongoClient(url);

app.post("/login",function(req,res){
    let {username,password}=req.body;
    client.connect(function(err, client) {
        console.log("Get :/login");  
        const db = client.db(dbname);
        db.collection("users")
        .find()
        .toArray(function(err,docs){
            console.log(docs);
         let user=docs.find((u)=>u.username === username && u.password === password);
        if(user)
       { 
        let payload={id: user.id};
        const token=jwt.sign(payload,params.secretOrKey,{
            algorithm :"HS256",
        });
       res.send(token);
    }else res.sendStatus(401);
})   }) })

app.post("/signup",function(req,res){
    let obj = {...req.body};
    console.log(obj);
     client.connect(function(err, client) {
         console.log("Post :/signup");  
         const db = client.db(dbname);
         db.collection("users")
         .insertOne(obj,function(err,docs){
             res.send(docs);
         })
 });
 })
 app.post("/uploadProduct",function(req,res){
    let obj = {...req.body};
    console.log(obj)
    // csvtojson()
    // .fromFile(obj)
    // .then(so => console.log(so))
 })
 app.get("/user",passport.authenticate("roleAll",{session : false}), function(req,res){
    console.log('In GET /user',req.user);
    res.send(req.user);
  })
app.get("/allusers",passport.authenticate("roleAll",{session : false}), function(req,res){
    console.log('In GET /allOrders',req.user);
    client.connect(function(err, client) {
        const db = client.db(dbname);
        db.collection("users")
        .find()
        .toArray(function(err,docs){
            res.send(docs);
        })
});

 })

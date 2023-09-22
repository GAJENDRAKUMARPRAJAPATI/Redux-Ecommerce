const express = require("express");
const app = express()

//connecting mongodb dataBase
const mongoClient = require("mongodb").MongoClient;
const conString = "mongodb://localhost:27017";

//using the cors for posting the data into api form application
const cors= require("cors")
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json())


app.get("/", (req,res)=>{
    res.send("Hii")
});

app.get("/api/login", (req, res) => {
    mongoClient.connect(conString, (err, clientObject)=>{
        if(!err){
            var dataBase = clientObject.db("reactdb");
            console.log(dataBase, 'dataBase');
            dataBase.collection("tbluser").find({}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end()
                }
            })
        }
    })
});

app.post("/api/registerUser", (req,res)=> {
    mongoClient.connect(conString, (err, clientObject)=> {
        if(!err){
            var dataBase =clientObject.db("reactdb");
            var userDetails ={
                UserName:req.body.UserName,
                Email:req.body.Email,
                Password:req.body.Password,
                Age:parseInt(req.body.Age),
                Mobile:req.body.Mobile,
            }
            
            console.log(req.body);
            dataBase.collection("tbluser").insertOne(userDetails, (err, result)=>{
                if(!err){
                    console.log("Record Inserted");
                    res.end();
                }else{
                    console.log(err);
                }
            })

        }
    })
})

app.get("/api/getOrders", (req, res) => {
    mongoClient.connect(conString, (err, clientObject)=>{
        if(!err){
            var dataBase = clientObject.db("reactdb");
            dataBase.collection("order").find({}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end()
                }
            })
        }
    })
});

app.post("/order", (req,res)=> {
    mongoClient.connect(conString, (err, clientObject)=> {
        if(!err){
            var dataBase =clientObject.db("reactdb");
            var oders={
                title:req.body.title,
                price:req.body.price,
                categories:req.body.categories,
                quantities:req.body.quantities
            }
            // var oders= req.body

            console.log(req.body);
            dataBase.collection("order").insertOne(req.body, (err, result)=>{
                if(!err){
                    console.log("Record Inserted");
                    res.end();
                }else{
                    console.log(err);
                }
            })

        }
    })
})

app.listen(8081);
console.log("server Started at http://127.0.0.1:8081"); 
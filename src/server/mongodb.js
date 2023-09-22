var mongoClient = require("mongodb").MongoClient;
var conString = "mongodb://127.0.0.1:27017";

mongoClient.connect(conString, (err,clientObject) => {
    if(!err){
        console.log("connected successfully");
        var dataBase = clientObject.db("ishop");
        dataBase.collection("Products").find({}).toArray(function(err, document){
            if(!err){
                console.log(document);
            }
        })
    }else{
        console.log("faild");
    }
});
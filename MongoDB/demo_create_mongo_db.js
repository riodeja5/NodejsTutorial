var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

console.log("start");
MongoClient.connect(url, function(err, db) {
    console.log("connect result");
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

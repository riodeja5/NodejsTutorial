
const { MongoClient, ServerApiVersion } = require('mongodb');
var url = "mongodb://localhost:27017/mydb";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Database created!");
  client.close();
});

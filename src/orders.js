const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connecting to database
const url = "mongodb://localhost:27017";
async function connect() {
  const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  
  try {
    await client.connect();

    // Accessing items in database 
    const db = client.db("packform_coding_test");
    customers = db.collection("customers").find({}).toArray();
    companies = db.collection("companies").find({}).toArray();
    deliveries = db.collection("deliveries").find({}).toArray();
    orderItems = db.collection("orderItems").find({}).toArray();
    orders = db.collection("orders").find({}).toArray();
  }
  catch (ex) {
    console.error('Something bad happened. '+ex);
  }
  finally {
    client.close();
  }
}

connect();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Initalising global variables for collections
let customers;
let companies;
let deliveries;
let orderItems;
let orders;

// Connecting to database
const url = "mongodb://localhost:27017/";
async function connect() {
  const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  try {
    await client.connect();
    const db = client.db("packform_coding_test");
    customers = db.collection('customers').find({});
    companies = db.collection('companies').find({});
    deliveries = db.collection('deliveries').find({});
    orderItems = db.collection('orderItems').find({});
    orders = db.collection('orders').find({});
  }
  catch (ex) {
    console.error('Something bad happened. '+ex);
  }
  finally {
    client.close();
  }
}

connect()
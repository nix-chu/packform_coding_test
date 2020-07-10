const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connecting to database
const url = "mongodb://localhost:27017";
async function connect() {
  const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  
  let items = []; // To store items in database and return
  try {
    await client.connect();

    // Accessing items in database 
    const db = client.db("packform_coding_test");
    customers = await db.collection("customers").find({}).toArray();
    items.push(customers)
    companies = await db.collection("companies").find({}).toArray();
    items.push(companies)
    deliveries = await db.collection("deliveries").find({}).toArray();
    items.push(deliveries)
    orderItems = await db.collection("orderItems").find({}).toArray();
    items.push(orderItems)
    orders = await db.collection("orders").find({}).toArray();
    items.push(orders)
    console.log(items)
  }
  catch (ex) {
    console.error('Something bad happened. '+ex);
  }
  finally {
    client.close();
  }

  return items
}

connect();
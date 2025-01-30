// establishes connection with Database

import { MongoClient, ServerApiVersion } from "mongodb";
// This is connection string . Mongodb container name is "mongodb" and port is 27017. Running mongodb as a container.
const URI = "mongodb://mongodb:27017";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// try block to verify id the connection is successful or not
try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("employees");

export default db;

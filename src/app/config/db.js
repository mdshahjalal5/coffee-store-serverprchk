import dotenv from "dotenv";
dotenv.config();
import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.uri;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;
export async function connectToDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    db = client.db("coffee-store");
    console.log("alhamdulillha, mongodb connected successfully");
  } catch (err) {
    console.log(`❌ Faild to connect to MongoDB `, err);
  } finally {
    // Ensures that the client will close when you finish/error
  }
}

export const getDB = () => {
  if (!db) {
    throw new Error("❌ DB is not connected, please call connectToDB first");
  }
  return db;
};

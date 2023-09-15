import { ObjectId, MongoClient, ServerApiVersion } from "mongodb";
import { config } from "dotenv";
config();

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("pokemon").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
async function connect() {
  try {
    await client.connect();
    const database = client.db("pokedex");
    return database.collection("pokemon");
  } catch (e) {
    console.error("Error connecting to database");
    console.error(e);
    await client.close();
  }
}

export class PokemonModel {
  static async getAll(limit) {
    const db = await connect();
    if (limit) {
      return db.find().limit(Number(limit)).toArray();
    }
    return db.find().toArray();
  }

  static async getById(id) {
    const db = await connect();
    // const objectId = new ObjectId(id);

    if (id) {
      const query = {
        _id: Number(id),
      };
      console.log("query: " + JSON.stringify(query));
      var pokemon;
      await db
        .findOne(query)
        .then((result) => {
          pokemon = result;

          console.log(pokemon);
        })
        .catch((err) => {
          console.log("error " + err);
        });

      return pokemon;
    }
    console.log("No object");
    return db.find({}).limit(100).toArray();
  }
}

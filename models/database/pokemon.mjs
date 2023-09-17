import { ObjectId, MongoClient, ServerApiVersion } from "mongodb";
import { config } from "dotenv";
config();

const client = new MongoClient(process.env.MONGO_DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("pokemon").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
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
    const objectId = new ObjectId(id);
    return db.findOne({ _id: objectId });
  }

  static async getByNumber(value) {
    const db = await connect();
    console.log(value);
    if (value) {
      console.log("entro");
      const query = {
        $or: [
          { number: Number(value) },
          { name: { $regex: value, $options: "i" } },
        ],
      };
      return db.findOne(query);
    }

    console.log("No object");
    return db.find({}).limit(100).toArray();
  }
}

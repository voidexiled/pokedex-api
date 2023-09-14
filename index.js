import express from "express";
import { createConnection } from "mongoose";
import { config } from "dotenv";
config();

const app = express();

const conn = createConnection(process.env.MONGO_DB_URI, {});
conn.on("error", console.error.bind(console, "connection error:"));
conn.once("open", function () {
  console.log("Connected to DB");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.get("/", (req, res) => {});

app.get("/pokemon", (req, res) => {
  res.send("Pokemon");
});

app.listen(process.env.DB_PORT, () => {
  console.log(`listening on *:${process.env.DB_PORT}`);
});

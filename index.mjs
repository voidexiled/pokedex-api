import express from "express";
import { config } from "dotenv";
import pokemonRoutes from "./routes/pokemonRoutes.mjs";
config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

// Rutas
app.use("/pokemon", pokemonRoutes);

app.listen(process.env.PORT, () => {
  console.log(`listening on https://localhost:${process.env.PORT}`);
});

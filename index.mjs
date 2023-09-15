import express from "express";
import { config } from "dotenv";
import pokemonRoutes from "./routes/pokemonRoutes.mjs";
config();

const app = express();

// app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Rutas

// app.get("/pokemon", getAllPokemons);
// app.get("/pokemon/:id", getPokemonById);
app.use("/pokemon", pokemonRoutes);

app.listen(process.env.DB_PORT, () => {
  console.log(`listening on https://localhost:${process.env.DB_PORT}`);
});

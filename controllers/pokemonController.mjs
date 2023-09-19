import { PokemonModel } from "../models/database/pokemon.mjs";

export async function getAllPokemons(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Cambia esto al origen de tu aplicación Frontend
  try {
    if (req.query.limit) {
      console.log(req.query.limit);
      const pokemons = await PokemonModel.getAll(req.query.limit);
      return res.json(pokemons);
    }
    const pokemons = await PokemonModel.getAll();
    return res.status(200).json(pokemons);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

export async function getPokemonByNumber(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Cambia esto al origen de tu aplicación Frontend
  console.log(req.params);
  if (req.params.number) {
    const pokemon = await PokemonModel.getByNumber(req.params.number);
    return res.json(pokemon);
  }
  return res.json({ message: "No se ha encontrado el pokemon." });
}

import { PokemonModel } from "../models/database/pokemon.mjs";

export async function getAllPokemons(req, res) {
  if (req.query.limit) {
    console.log(req.query.limit);
    const pokemons = await PokemonModel.getAll(req.query.limit);
    return res.json(pokemons);
  }
  const pokemons = await PokemonModel.getAll();

  return res.json(pokemons);
}

export async function getPokemonById(req, res) {
  const pokemon = await PokemonModel.getById(req.params.id);

  return res.json(pokemon);
}

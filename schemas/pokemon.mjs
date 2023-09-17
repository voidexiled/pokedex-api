import mongoose from "mongoose";

const AbilitySchema = new mongoose.Schema({
  name: String,
  url: String,
});

const TypeSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const StatSchema = new mongoose.Schema({
  base_stat: Number,
  effort: Number,
  stat: {
    name: String,
    url: String,
  },
});

const FormSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const SpriteSchema = new mongoose.Schema({
  back_default: String,
  front_default: String,
  back_shiny: String,
  front_shiny: String,
});

const AbilitySlotSchema = new mongoose.Schema({
  ability: AbilitySchema,
  is_hidden: Boolean,
  slot: Number,
});

const PokemonSchema = new mongoose.Schema({
  _id: String,
  number: Number,
  name: String,
  height: Number,
  weight: Number,
  abilities: [AbilitySlotSchema],
  forms: [FormSchema],
  is_default: Boolean,
  sprites: SpriteSchema,
  types: [TypeSchema],
  stats: [StatSchema],
});

export const Pokemon = mongoose.model("Pokemon", PokemonSchema);

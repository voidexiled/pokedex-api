import { Router } from "express";

import {
  getAllPokemons,
  getPokemonByNumber,
} from "../controllers/pokemonController.mjs";

const router = Router();
router.get("/", getAllPokemons);
router.get("/:number", getPokemonByNumber);

// router.get("/:types", getPokemonByTypes);
// router.get("/:", getPokemonByName);
// router.get("/:type", getPokemonByNumber);

// router.get("/:name", getPokemonByName);

// router.use();
export default router;

import { Router } from "express";

import {
  getAllPokemons,
  getPokemonById,
} from "../controllers/pokemonController.mjs";

const router = Router();
router.get("/", getAllPokemons);
router.get("/:id", getPokemonById);

// router.use();
export default router;

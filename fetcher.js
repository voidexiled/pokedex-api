import { writeFile, writeFileSync } from "fs";
const url = "https://pokeapi.co/api/v2/pokemon/";
const countUrl = "https://pokeapi.glitch.me/v1/pokemon/counts";
const res = await fetch(url).then(function (response) {
  return response.json();
});

const count = res.count;
console.log(count);
var pokemons = [];
var string = "";
const first = 1011;
const last = 1281;

for (let i = first; i <= last; i++) {
  const poke = await fetch(`${url}/${i}`).then(function (response) {
    return response.json();
  });

  const sprites = {
    back_default: poke.sprites.back_default,
    front_default: poke.sprites.front_default,
    back_shiny: poke.sprites.back_shiny,
    front_shiny: poke.sprites.front_shiny,
  };
  const pokemon = {
    id: poke.id,
    name: poke.name,
    height: poke.height,
    weight: poke.weight,
    abilities: poke.abilities,
    forms: poke.forms,
    is_default: poke.is_default,
    sprites: sprites,
    types: poke.types,
    stats: poke.stats,
  };
  // string += JSON.stringify(pokemon);
  pokemons.push(pokemon);
  console.log(pokemon.id);
}

// const pokemon = await fetch(`${url}/1`).then(function (response) {
//   return response.json();
// });
// console.log(pokemon.sprites);
console.log(pokemons);
// writeFile("pokemons3.json", JSON.stringify(pokemon), function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });
// for (let i = 1; i <= count; i++) {
//   const pokemon = await fetch(`${url}/${i}`).then(function (response) {
//     return response.json();
//   });

//   pokemons.push(pokemon);
// }

writeFile("pokemons1011-1281.json", JSON.stringify(pokemons), function (err) {
  if (err) throw err;
  console.log("Saved!");
});

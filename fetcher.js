import { writeFile } from "fs";
const url = "https://pokeapi.co/api/v2/pokemon";
const res = await fetch(url).then(function (response) {
  return response.json();
});

const count = res.count;
console.log(count);
var pokemons = [];
for (let i = 1; i <= 50; i++) {
  const pokemon = await fetch(`${url}/${i}`).then(function (response) {
    return response.json();
  });
  pokemons.push(pokemon);
}

writeFile("pokemons.json", JSON.stringify(pokemons), function (err) {
  if (err) throw err;
  console.log("Saved!");
});

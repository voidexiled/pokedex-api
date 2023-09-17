/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
const fs = require("fs");

const database = "pokedex";
const collection = "pokemon";

const jsonData = fs.readFileSync("data/pokemons.json");
const pokemons = JSON.parse(jsonData);
console.log(pokemons.length);

// Create a new database.
use(database);

// // Create a new collection.
// db.createCollection(collection);

// db.createCollection(collection, {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: [
//         "id",
//         "name",
//         "height",
//         "weight",
//         "abilities",
//         "forms",
//         "is_default",
//         "sprites",
//         "types",
//         "stats",
//       ], // Lista de campos requeridos
//       properties: {
//         id: { bsonType: "number" },
//         name: { bsonType: "string" },
//         height: { bsonType: "number" },
//         weight: { bsonType: "number" },
//         abilities: {
//           bsonType: "array",
//           items: {
//             bsonType: "object",
//             properties: {
//               ability: {
//                 bsonType: "object",
//                 properties: {
//                   name: { bsonType: "string" },
//                   url: { bsonType: "string" },
//                 },
//               },
//               is_hidden: { bsonType: "bool" },
//               slot: { bsonType: "number" },
//             },
//           },
//         },
//         forms: {
//           bsonType: "array",
//           items: {
//             bsonType: "object",
//             properties: {
//               name: { bsonType: "string" },
//               url: { bsonType: "string" },
//             },
//           },
//         },
//         is_default: { bsonType: "bool" },
//         sprites: {
//           bsonType: "object",
//           properties: {
//             back_default: { bsonType: "string" },
//             front_default: { bsonType: "string" },
//             back_shiny: { bsonType: ["string", "null"] },
//             front_shiny: { bsonType: ["string", "null"] },
//           },
//         },
//         types: {
//           bsonType: "array",
//           items: {
//             bsonType: "object",
//             properties: {
//               slot: { bsonType: "number" },
//               type: {
//                 bsonType: "object",
//                 properties: {
//                   name: { bsonType: "string" },
//                   url: { bsonType: "string" },
//                 },
//               },
//             },
//           },
//         },
//         stats: {
//           bsonType: "array",
//           items: {
//             bsonType: "object",
//             properties: {
//               base_stat: { bsonType: "number" },
//               effort: { bsonType: "number" },
//               stat: {
//                 bsonType: "object",
//                 properties: {
//                   name: { bsonType: "string" },
//                   url: { bsonType: "string" },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// });

// try {
//   db[collection].insertMany(pokemons);
//   console.log("Pokemons insertados con éxito");
// } catch (error) {
//   console.error("Error al insertar:", error.message);
// }

var cont = 0;

pokemons.forEach((pokemon) => {
  try {
    cont++;
    console.log(cont);

    db[collection].insertOne(pokemon);
  } catch (error) {
    console.log(JSON.stringify(pokemons[cont]));
    console.error("Error al insertar documento:", pokemon);
  }
});

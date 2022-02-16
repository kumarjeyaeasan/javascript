const mongoose = require("mongoose");

const assert = require("assert");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Define schema (table structure)
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// Use the schema to define the collection (table.) (Fruit will beome fruits in mongo DB)
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "very good",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// automatically create "people" collection (table)
const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Senthil",
  age: 38,
});

person.save();

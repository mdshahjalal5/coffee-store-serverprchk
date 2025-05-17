import { ObjectId } from "mongodb";
import { getDB } from "../../config/db.js";

const getCoffeeCollection = () => {
  // const db = await getDB();
  const coffeeCollection = getDB().collection("coffees");
  // const userCollection = () => getDB().collection("users");

  return coffeeCollection;
};
const createCoffeeIntoDB = async (coffee) => {
  const coffeeCollection = getCoffeeCollection();

  const response = await coffeeCollection.insertOne(coffee);
  return response;
};

const createMultipleCoffeeIntoDB = async (coffees) => {
  const coffeeCollection = getCoffeeCollection();
  const response = await coffeeCollection.insertMany(coffees);
  return response;
};

const getCoffeesFromDB = async () => {
  const coffeeCollection = await getCoffeeCollection();
  const response = await coffeeCollection.find().toArray();
  return response;
};

const getSingleCoffeeFromDB = async (id) => {
  const coffeeCollection = await getCoffeeCollection();
  const response = await coffeeCollection.findOne({ _id: new ObjectId(id) });

  return response;
};

const deleteCoffeeFromDB = async (id) => {
  const coffeeCollection = await getCoffeeCollection();
  const response = await coffeeCollection.deleteOne({ _id: new ObjectId(id) });
  return response;
};

const updateCoffeeInDB = async (id, coffee) => {
  const coffeeCollection = await getCoffeeCollection();

  const filter = {
    _id: new ObjectId(id),
  };

  const updateDoc = {
    $set: coffee,
  };
  const options = {
    upsert: false,
  };
  const response = await coffeeCollection.updateOne(filter, updateDoc, options);
  return response;
};

export const Coffeeservices = {
  createCoffeeIntoDB,
  getCoffeesFromDB,
  getSingleCoffeeFromDB,
  deleteCoffeeFromDB,
  updateCoffeeInDB,
  createMultipleCoffeeIntoDB,
};

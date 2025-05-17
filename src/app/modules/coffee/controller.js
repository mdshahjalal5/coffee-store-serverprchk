import sendResponose from "../../../utils/sendResponose.js";
import { Coffeeservices } from "./service.js";

const createCoffee = async (req, res, next) => {
  const coffee = req.body;
  try {
    const response = await Coffeeservices.createCoffeeIntoDB(coffee);
    sendResponose(res, {
      success: true,
      message: "Coffee created successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const createMultipleCoffee = async (req, res, next) => {
  const coffees = req.body;
  try {
    const response = await Coffeeservices.createMultipleCoffeeIntoDB(coffees);
    sendResponose(res, {
      success: true,
      message: "Coffees created successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const getCoffees = async (req, res, next) => {
  try {
    const response = await Coffeeservices.getCoffeesFromDB();
    sendResponose(res, {
      success: true,
      message: "All coffees fetched successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleCoffee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await Coffeeservices.getSingleCoffeeFromDB(id);
    sendResponose(res, {
      success: true,
      message: "Single coffee fetched successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const updateCoffee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const coffee = req.body;
    const response = await Coffeeservices.updateCoffeeInDB(id, coffee);
    sendResponose(res, {
      success: true,
      message: "Coffee updated successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};
export const CoffeeControllers = {
  createCoffee,
  getCoffees,
  getSingleCoffee,
  updateCoffee,
  createMultipleCoffee,
};

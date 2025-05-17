import { Router } from "express";
import { CoffeeControllers } from "./controller.js";

const router = Router();

router.get("/coffees", CoffeeControllers.getCoffees);
router.post("/coffees", CoffeeControllers.createMultipleCoffee);

export const coffeeRoutes = router;

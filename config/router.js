import express from "express"

import {
  getAllRecipes,
  getSingleRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipes.js"
import { loginUser, registerUser } from "../controllers/auth.js"
import { getUserProfile } from "../controllers/users.js"
import { secureRoute } from "./secureRoute.js"

const router = express.Router()

router.route("/recipes").get(getAllRecipes).post(secureRoute, addRecipe)

router
  .route("/recipes/:id")
  .get(getSingleRecipe)
  .put(secureRoute, updateRecipe)
  .delete(secureRoute, deleteRecipe)

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

export default router

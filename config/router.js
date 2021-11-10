import express from "express"

import {
  getAllRecipes,
  getSingleRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipes.js"

const router = express.Router()

router.route("/recipes").get(getAllRecipes).post(addRecipe)

router
  .route("/recipes/:id")
  .get(getSingleRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe)

export default router

import mongoose from "mongoose"
import { dbURI } from "../config/environment.js"
import Recipe from "../models/recipe.js"
import recipeData from "./data/recipes.js"
import User from "../models/user.js"
import userData from "./data/users.js"

const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log("connected to DB")

    await mongoose.connection.db.dropDatabase()
    console.log("DB has been dropped")

    const users = await User.create(userData)
    console.log(`DB has been seeded with ${users.length} users`)

    const recipes = await Recipe.create(recipeData)
    console.log(`DB has been seeded with ${recipes.length} recipes`)

    await mongoose.connection.close()
    console.log("connection with DB closed")
  } catch (err) {
    console.log(err)
    await mongoose.connection.close()
    console.log("connection with DB closed")
  }
}

seedDatabase()

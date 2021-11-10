import mongoose from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 75 },
  ingredients: [{ type: String, required: true }],
  categories: [{ type: String, required: true }],
  prepTime: { type: Number, required: true, min: 0 },
  cookTime: { type: Number, required: true, min: 0 },
  method: { type: String, required: true },
  difficulty: { type: Number, required: true, min: 1, max: 3 },
  servings: { type: Number, required: true, min: 1 },
  calories: { type: Number, min: 1 },
  allergens: [{ type: String, required: true }],
  // comments
  // likes/rating
  // owner
  //mark as tried/eaten
})

recipeSchema.plugin(uniqueValidator)

export default mongoose.model("Recipe", recipeSchema)

import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxlength: 350 },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: false, min: 1, max: 5 },
  },
  {
    timestamps: true,
  }
)
// its own model/reference relationship rather than embedded?
const favouriteSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
})

//field on recipe of likes, array of user ids

const recipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 75 },
    image: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    categories: [{ type: String, required: true }],
    prepTime: { type: Number, required: true, min: 0 },
    cookTime: { type: Number, required: true, min: 0 },
    method: [{ type: String, required: true }],
    difficulty: { type: Number, required: true, min: 1, max: 3 },
    servings: { type: Number, required: true, min: 1 },
    calories: { type: Number, min: 1 },
    allergens: [{ type: String, required: true }],
    video: { type: String },
    // likes/rating
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    comments: [commentSchema],
    likedBy: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    //mark as tried/eaten
  },
  { timestamps: true }
)

recipeSchema.virtual('averageRating').get(function () {
  if (!this.comments.length) return 'Currently unrated'
  const sumOfRatings = this.comments.reduce((acc, comment) => {
    if (!comment.rating) return acc
    return acc + comment.rating
  }, 0)
  return (sumOfRatings / this.comments.length).toFixed(1)
})

recipeSchema.set('toJSON', { virtuals: true })

recipeSchema.plugin(uniqueValidator)

export default mongoose.model('Recipe', recipeSchema)

import Recipe from "../models/recipe.js"

export const getAllRecipes = async (_req, res) => {
  const recipes = await Recipe.find()
  return res.status(200).json(recipes)
}

export const getSingleRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    return res.status(200).json(recipe)
  } catch (err) {
    console.log("Recipe Not Found")
    return res.status(404).json({ message: "Recipe Not Found" })
  }
}

export const addRecipe = async (req, res) => {
  try {
    const newRecipe = { ...req.body }
    const recipeToAdd = await Recipe.create(newRecipe)
    console.log(recipeToAdd)
    return res.status(201).json(recipeToAdd)
  } catch (err) {
    console.log(err)
  }
}

export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    )
    console.log(updatedRecipe)
    if (!updateRecipe) throw new Error("Recipe not found!")
    return res.status(202).json(updatedRecipe)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: "Recipe not found!" })
  }
}

export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const recipeToDelete = await Recipe.findById(id)
    console.log(recipeToDelete)
    if (!recipeToDelete) throw new Error("Recipe not found!")
    await recipeToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: "Recipe not found!" })
  }
}

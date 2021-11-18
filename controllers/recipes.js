import Recipe from '../models/recipe.js'
import User from '../models/user.js'

export const getAllRecipes = async (_req, res) => {
  const recipes = await Recipe.find().populate('owner')
  return res.status(200).json(recipes)
}

export const getSingleRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await (await Recipe.findById(id)).populate('owner')
    return res.status(200).json(recipe)
  } catch (err) {
    console.log('Recipe Not Found')
    return res.status(404).json({ message: 'Recipe Not Found' })
  }
}

export const addRecipe = async (req, res) => {
  try {
    const newRecipe = { ...req.body, owner: req.currentUser._id }
    const recipeToAdd = await Recipe.create(newRecipe)
    console.log(recipeToAdd)
    return res.status(201).json(recipeToAdd)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
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
    if (!updateRecipe) throw new Error('Recipe not found!')
    return res.status(202).json(updatedRecipe)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Recipe not found!' })
  }
}

export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const recipeToDelete = await Recipe.findById(id)
    console.log(recipeToDelete)
    if (!recipeToDelete) throw new Error('Recipe not found!')
    if (!recipeToDelete.owner.equals(req.currentUser._id)) throw new Error()
    await recipeToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Recipe not found!' })
  }
}

export const addAComment = async (req, res) => {
  try {
    console.log(req)
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    if (!recipe) throw new Error('Recipe not found!')
    const newComment = {
      ...req.body,
      owner: req.currentUser._id,
      username: req.currentUser.username,
    }
    if (!newComment)
      return res.status(418).json({ message: 'comment undefined' })
    recipe.comments.push(newComment)
    await recipe.save({ validateModifiedOnly: true })
    return res.status(200).json(recipe)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

export const deleteAComment = async (req, res) => {
  try {
    const { id, commentId } = req.params
    console.log(req.params)
    const recipe = await Recipe.findById(id)
    if (!recipe) throw new Error('Recipe not found!')
    const commentToDelete = recipe.comments.id(commentId)
    if (!commentToDelete) throw new Error('Comment not found!')
    if (!commentToDelete.owner.equals(req.currentUser._id))
      throw new Error('Unauthorised')
    await commentToDelete.remove()
    await recipe.save({ validateModifiedOnly: true })
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

export const addLikedBy = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    // const user = await User.findById(req.currentUser._id)
    if (!recipe) throw new Error('Recipe not found!')
    // if (!user) throw new Error("User not found!")
    if (recipe.likedBy.includes(req.currentUser._id)) {
      throw new Error('User has already liked this recipe')
    }
    recipe.likedBy.push(req.currentUser._id)
    // user.likedRecipes.push(recipe.id)
    await recipe.save({ validateModifiedOnly: true })
    // await user.save({ validateModifiedOnly: true })
    return res.status(200).json(recipe)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

export const removeLikedBy = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    if (!recipe) throw new Error('Recipe not found!')
    if (recipe.likedBy.includes(!req.currentUser._id)) {
      throw new Error('User has not previously liked this recipe')
    }
    recipe.likedBy.pull(req.currentUser._id)
    await recipe.save({ validateModifiedOnly: true })
    return res.status(200).json(recipe)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

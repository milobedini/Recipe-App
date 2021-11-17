import User from "../models/user.js"

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id).populate(
      "createdRecipes likedRecipes"
    )
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: "Not Found" })
  }
}

export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email

      if (req.body.password) {
        user.password = req.body.password
      }
      const updatedUser = await user.save()

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser._id,
        token: generateToken(updatedUser.id),
      })
    }
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: "Not Found" })
  }
}

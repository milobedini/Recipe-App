import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

export const registerUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        console.log(newUser)
        return res.status(202).json({ message: `Welcome ${newUser.username}`})
    } catch (err) {
        console.log(err)
        return res.status(422).json(err)
    }
}

export const loginUser = async (req, res) => {
    try {
        const userToLogin = await User.findOne({ username: req.body.username })
        console.log('USER ->', userToLogin)
        if(!userToLogin || !userToLogin.validatePassword(req.body.password)){
            throw new Error()
        }
        const token = jwt.sign({ sub: userToLogin._id}, secret, {expiresIn: '10 days'})
        return res.status(200).json({ message: `Welcome back ${userToLogin.username}`, token: token })
    } catch (err) {
        console.log(err)
        return res.status(422).json({ message: 'Unauthorised' })
    }
}
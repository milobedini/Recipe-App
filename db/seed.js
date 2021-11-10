import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import Recipe from '../models/recipe.js'
import recipeData from './data/recipes.js'

const seedDatabase = async () => {
    try {
        await mongoose.connect(dbURI)
        console.log('connected to DB')
        
        await mongoose.connection.db.dropDatabase()
        console.log('DB has been dropped')
        
        const recipes = await Recipe.create(recipeData)
        console.log(`DB has been seeded with ${recipes.length} recipes`)
        
        await mongoose.connection.close()
        console.log('connection with DB closed')
    } catch (err) {
        console.log(err)
        await mongoose.connection.close()
        console.log('connection with DB closed')
    }
}

seedDatabase()
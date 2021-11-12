import React from 'react'
import FormInput from './FormInput.js'

const RecipeForm = ({ formInputProps }) => {
    return (
        <>
            <FormInput 
                name='name'
                type='text'
                placeholder='name of recipe'
                {...formInputProps}
            />
            <FormInput
                name='image'
                type='text'
                placeholder='<recipe image url>'
                {...formInputProps}
            />
            <FormInput 
                name="ingredients"
                type='text'
                placeholder='list of ingredients'
                {...formInputProps}
            />
            <FormInput 
                name='categories'
                type='text'
                placeholder='select categories'
                {...formInputProps}
            />
            <FormInput 
                name='prepTime'
                type='number'
                placeholder='Preparation Time'
                {...formInputProps}
            />
            <FormInput 
                name='cookTime'
                type='number'
                placeholder='Cooking Time'
                {...formInputProps}
            />
            <FormInput 
                name='method'
                type='text'
                placeholder='Cooking Instructions'
                {...formInputProps}
            />
            <FormInput 
                name='difficulty'
                type='number'
                placeholder='Difficulty to cook'
                {...formInputProps}
            />
            <FormInput 
                name='servings'
                type='Number'
                placeholder='Number of Servings'
                {...formInputProps}
            />
            <FormInput 
                name='calories'
                type='number'
                placeholder='calories (optional)'
                {...formInputProps}
            />
            <FormInput 
                name='allergens'
                type='text'
                placeholder='Allergens'
                {...formInputProps}
            />
            <FormInput 
                name='video'
                type='url'
                placeholder='Video link for cooking method'
                {...formInputProps}
            />
        </>
    )
}

export default RecipeForm
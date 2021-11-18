import React from "react"
import FormInput from "./FormInput.js"
import { ImageUploadField } from "./ImageUploadField.js"
import { useState } from "react"

const RecipeForm = ({ formInputProps, setData, data }) => {
  const handleImageUrl = (url) => {
    setData({ ...data, image: url })
  }

  return (
    <>
      <FormInput
        name="name"
        type="text"
        placeholder="name of recipe"
        {...formInputProps}
      />
      <FormInput
        name="ingredients"
        type="text"
        placeholder="list of ingredients"
        {...formInputProps}
      />
      <FormInput
        name="categories"
        type="text"
        placeholder="select categories"
        {...formInputProps}
      />
      <FormInput
        name="prepTime"
        type="number"
        placeholder="Preparation Time"
        {...formInputProps}
      />
      <FormInput
        name="cookTime"
        type="number"
        placeholder="Cooking Time"
        {...formInputProps}
      />
      <FormInput
        name="method"
        type="text"
        placeholder="Cooking Instructions"
        {...formInputProps}
      />
      <FormInput
        name="difficulty"
        type="number"
        placeholder="Difficulty on a scale from 1 to 3"
        {...formInputProps}
      />
      <FormInput
        name="servings"
        type="Number"
        placeholder="Number of Servings"
        min="1"
        max="15"
        {...formInputProps}
      />
      <FormInput
        name="calories"
        type="number"
        placeholder="calories (optional)"
        {...formInputProps}
      />
      <FormInput
        name="allergens"
        type="text"
        placeholder="Allergens"
        {...formInputProps}
      />
      <ImageUploadField
        name="image"
        value={data.image}
        handleImageUrl={handleImageUrl}
        {...formInputProps}
      />
    </>
  )
}

export default RecipeForm

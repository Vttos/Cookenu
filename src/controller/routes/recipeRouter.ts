import express from 'express'
import { RecipeController } from '../RecipeController'

export const recipeRouter = express.Router()

const recipeController = new RecipeController()

recipeRouter.post('/post/:id', recipeController.postRecipe)

recipeRouter.get('/user/:id', recipeController.getRecipe)

recipeRouter.get('/all/:id', recipeController.getRecipes)

recipeRouter.get('/follow/:id', recipeController.recipesFollow)
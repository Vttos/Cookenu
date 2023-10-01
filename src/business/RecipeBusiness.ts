import { InputRecipeDTO, recipe, FindRecipeDTO } from "../model/recipe"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { Authenticator } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { CustomError } from "../error/customError"
import { dataAtual } from "../services/dataAtual"

const recipeDatabase = new RecipeDatabase()
const authenticator = new Authenticator()

export class RecipeBusiness {

    public postRecipe = async (input:InputRecipeDTO) => {
        try {
            let{
                title,
                description,
                idUser,
                token
            } = input

            if(!title || !description) {
                throw new CustomError(400, "Preencha corretamente os campos")
            }

            const id = generateId()
            const compareToken = authenticator.getToken(token)
            const data = dataAtual() 
        
            const recipe: recipe = {
                id,
                title,
                description,
                dataCriacao: data,
                idUser
            }

            await recipeDatabase.insertRecipe(recipe)

        } catch (error: any) {
            throw new CustomError(400, error.message) 
        }
    }

    public getRecipe = async (recipe: FindRecipeDTO) => {
        try {
            let{ idUser, token } = recipe

            if(!idUser) {
                throw new CustomError(400, "O id não esta sendo passado.")
            }

            const compareToken = authenticator.getToken(token)

            const result = await recipeDatabase.findRecipe(idUser)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getRecipes = async (recipe: FindRecipeDTO) => {
        try {
            let{ idUser, token } = recipe

            if(!idUser) {
                throw new CustomError(400, "O id não esta sendo passado.")
            }

            const compareToken = authenticator.getToken(token)

            const result = await recipeDatabase.findRecipes(idUser)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public recipesFollow = async (recipe: FindRecipeDTO) => {
        try {
            let{ idUser, token } = recipe

            if(!idUser) {
                throw new CustomError(400, "O id não esta sendo passado.")
            }

            const compareToken = authenticator.getToken(token)

            const result = await recipeDatabase.findRecipeFollow(idUser)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}
import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness"
import { InputRecipeDTO, FindRecipeDTO } from "../model/recipe"


const recipeBusiness = new RecipeBusiness()

export class RecipeController {

    public postRecipe = async(req: Request, res: Response) => {
        try {
            const input:InputRecipeDTO = {
                title: req.body.title,
                description: req.body.description,
                idUser: req.params.id,
                token: req.headers.authorization! 
            }
 
            await recipeBusiness.postRecipe(input)

            res.status(200).send({message: "Receita postada."})
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    public getRecipe = async(req: Request, res: Response) => {
        try{
            const input:FindRecipeDTO = {
                idUser: req.params.id,
                token: req.headers.authorization!
            }

            const recipes = await recipeBusiness.getRecipe(input)

            res.status(200).send({recipes})
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    public getRecipes = async(req: Request, res: Response) => {
        try{
            const input:FindRecipeDTO = {
                idUser: req.params.id,
                token: req.headers.authorization!
            }

            const recipes = await recipeBusiness.getRecipes(input)

            res.status(200).send({recipes})
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    public recipesFollow = async(req: Request, res: Response) => {
        try{
            const input:FindRecipeDTO = {
                idUser: req.params.id,
                token: req.headers.authorization!
            }

            const recipes = await recipeBusiness.recipesFollow(input)

            res.status(200).send({recipes})
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}
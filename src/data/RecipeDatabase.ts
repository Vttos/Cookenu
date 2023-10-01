import { recipe } from "../model/recipe"
import { BaseDatabase } from "./BaseDatabase"
import { CustomError } from "../error/customError";
import { formatData } from "../services/dataAtual"

export class RecipeDatabase extends BaseDatabase {
    private TABLE_RECIPES = "v_cookenu_recipes_1"
    private TABLE_FOLLOWING = "cookenu_following"
    private TABLE_RECIPE = "cookenu_recipes"

    public insertRecipe = async (recipe: recipe) => {
        try {
            await RecipeDatabase.connection
                .insert({
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    data_criacao: recipe.dataCriacao,
                    id_user: recipe.idUser
                })
                .into(this.TABLE_RECIPE)
         } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public findRecipeFollow = async (id: string) => {
        try {

            // const listId = await RecipeDatabase.connection(this.TABLE_FOLLOWING)
            //     .select()
            //     .where({id_user: id})
            

            // const listRec: string[]= []

            // const userRecipes:any = await RecipeDatabase.connection(this.TABLE_RECIPES)
            //     .select()
            //     .where({id_user: id})

            
            
            // for(let index of listId){
            //     const recipe:any = await RecipeDatabase.connection(this.TABLE_RECIPES)
            //         .select()
            //         .where({id_user: index.id_seguido})
                

            //     if(recipe.length){

            //         listRec.push(recipe)
            //     }
                
            // }

            // const newList: any[] = []

            // if(userRecipes.length){
            //     newList.push(userRecipes[0], listRec[0])
            // } else {
            //     newList.push(listRec[0])
            // }
            
            const follows: any = await RecipeDatabase.connection(this.TABLE_FOLLOWING)
                                       .select("id_seguido")
                                       .where({id_user: id})

            const newList: any[] = []
            for(const index in follows){

                newList.push(follows[index].id_seguido)
                
            }

            console.log(newList)
            const recipesFollow: any = await RecipeDatabase.connection(this.TABLE_RECIPE)
                                       .select()
                                       .whereIn("id_user", newList)


            return  recipesFollow
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public findRecipe = async (id: string) => {
        try {            
            const Recipes:any = await RecipeDatabase.connection(this.TABLE_RECIPE)
                                .select()
                                .where({id_user: id})         

            return  Recipes
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public findRecipes = async (id: string) => {
        try {    
            const Recipes:any = await RecipeDatabase.connection(this.TABLE_RECIPE)
                .select()
                .whereNot({id_user: id})         

            return  Recipes
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}
import {Response} from "express";

interface IRecipesController extends IControllers {
    getAllRecipes(response: Response): Response;
    getRecipe(recipeName: string): object;
    storeRecipe(recipe: object): void;
    updateRecipe(recipe: object): void;
 }

export default IRecipesController;
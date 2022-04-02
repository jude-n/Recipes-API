import express, {Request, Response} from "express";
import IRecipesController from "./IRecipesController";

export class RecipesController implements IRecipesController {

    constructor() {
    }

    // Can group unique things you need to do in this and call it in constructor
    initializeController(): void {
    }

    getAllRecipes(response: Response): Response {
        return response.status(200).json({oh:"gh"});
    }

    getRecipe(recipeName: string): object {
        return {oh:"mi"};
    }

    storeRecipe(recipe: object): void {
    }

    updateRecipe(recipe: object): void {
    }
}

export default RecipesController;
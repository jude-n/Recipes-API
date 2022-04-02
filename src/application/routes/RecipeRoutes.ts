import IRoutes from './IRoutes';
import express, {Request, Response} from "express";
import {RecipesController} from "../controllers/RecipesController";
export default class RecipeRoutes implements IRoutes {
    path: '/recipes';
    router: express.Router;

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', this.getRecipesRoute)
    }

    // Response: how data should be returned
    // Controller just does calculation and this checks if there is something and returns response
    getRecipesRoute = async (request: Request, response: Response) => {
        const recipesController = new RecipesController();
        return recipesController.getAllRecipes(response);
    }
}
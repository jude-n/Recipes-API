"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const RecipesController_1 = require("../controllers/RecipesController");
class RecipeRoutes {
    constructor() {
        // Response: how data should be returned
        // Controller just does calculation and this checks if there is something and returns response
        this.getRecipesRoute = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const recipesController = new RecipesController_1.RecipesController();
            return recipesController.getAllRecipes(response);
        });
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/', this.getRecipesRoute);
    }
}
exports.default = RecipeRoutes;
//# sourceMappingURL=RecipeRoutes.js.map
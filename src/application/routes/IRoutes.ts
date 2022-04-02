import { Router } from "express";

interface IRoutes {
    path: string; // Typescript so you have to define the type
    router: Router;

    initializeRoutes(): void; // Default function that will contain all the routes
}

export default IRoutes;
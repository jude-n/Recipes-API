## A simple CRUD App API for Recipes

This simple node api is using domain driven design and express and typescript

Layers:
 - Application:
   - This leads the user from one screen to another
 - Domain:
   - This takes care of how the application works
   - The business rules of the app
 - Infrastructure:
   - How data that is initially held in memory is persisted in DB or another persistent store
     - Persistence: object or data that continue to exist after the program has been closed down
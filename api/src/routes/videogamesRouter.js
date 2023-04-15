const { Router } = require('express');
const videogamesRouter = Router();
//import handlers
const {
    getVideogamesHandler,
    getVideogameByIdHandler,
    postVideogamesHandler
} = require ('../handlers/videogamesHandlers.js')

// Get Routes.
videogamesRouter.get('/',getVideogamesHandler);
videogamesRouter.get('/:id',getVideogameByIdHandler);

// Post Routes.
videogamesRouter.post('/', postVideogamesHandler);

module.exports = videogamesRouter;
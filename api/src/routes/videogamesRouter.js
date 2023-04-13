const { Router } = require('express');
const videogamesRouter = Router();
//import handlers
const {
    getVideogamesHandler,
    getVideogameByIdHandler,
    postVideogamesHandler
} = require ('../handlers/videogamesHandlers.js')

// Getting Routes.
videogamesRouter.get('/',getVideogamesHandler);
videogamesRouter.get('/:id',getVideogameByIdHandler);

// Posting Routes.
videogamesRouter.post('/', postVideogamesHandler);

module.exports = videogamesRouter;
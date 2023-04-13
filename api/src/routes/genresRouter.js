const { Router } = require('express');
const genresRouter = Router();

// Import handlers
const getGenresHandler = require ('../handlers/genresHandlers')


// Getting routes
genresRouter.get('/',getGenresHandler);


module.exports = genresRouter;
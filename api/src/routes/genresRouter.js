const { Router } = require('express');
const genresRouter = Router();

// Import handlers
const getGenres = require ('../handlers/genresHandlers')


// Getting routes
genresRouter.get('/',getGenres);


module.exports = genresRouter;
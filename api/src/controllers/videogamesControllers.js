const { Videogame } = require('../db.js');


const createVideoGame = async (name,description,platforms,image,release,rating) =>
    await Videogame.create({name,description,platforms,image,release,rating});

    module.exports = createVideoGame;
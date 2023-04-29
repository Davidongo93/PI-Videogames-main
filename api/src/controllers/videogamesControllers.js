const { Op } = require('sequelize');
const { Videogame, Genre } = require('../db.js');
const axios = require ('axios');
const {KEY,URL} = process.env;


//Controller post videogame.
//Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
const createVideoGame = async (name,description,platforms,image,released,rating,genre) => {
    return await Videogame.create({name,description,platforms,image,released,rating,genre});

};

//controller get videogame by id.
// ! PENDIENTES Tiene que incluir los datos del género del videojuego al que está asociado.
const  getVideogameById = async (id,source) => {
        const response = 
        source === "api"
        ?await axios.get(`${URL}/games/${id}?key=${KEY}`)
        :await Videogame.findByPk(id);
        if (source === "api") {
            const { id,name, description, released, platforms,background_image,rating,genres} = response.data;
            const platformsName = platforms.map(data => data.platform.name);
            genresName = genres.map(data=>data.name); 
            return { id,name, description, released, platformsName,background_image,rating,genresName};
          } else {
            return response;
          }
    };

/* Imagen.
Rating.
Géneros. */
// controller get all games.

const cleanArray = (arr) => {
  return arr.map(elem => {
      const platforms = [elem.platforms, elem.parent_platforms]
          .flatMap(platform => platform.map(p => p.platform.name))
          .filter((name, index, arr) => arr.indexOf(name) === index);
      const genres = elem.genres.map(g => g.id);
      return {
          id: elem.id,
          name: elem.name,
          description: elem.description,
          platform: platforms,
          image: elem.background_image,
          released: elem.released,
          rating: elem.rating,
          genre: genres,
          created: false
      };
  });
};


    const getAllGames = async () => {
        const dbVideogames = await Videogame.findAll();
        const apiVideogamesRaw = (await axios.get(`${URL}/games?key=${KEY}`)).data.results;
        const apiVideogames = cleanArray(apiVideogamesRaw);
        return [...dbVideogames,...apiVideogames]
    };

// controller get games by name.
const getVideogameByName = async (name) => {
  const dbVideogames = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`
      }
    },
    limit: 15
  });
  const apiVideogamesRaw = (await axios.get(`${URL}/games?search=${name}&key=${KEY}&pageSize=15`)).data.results;
  const apiVideogames = cleanArray(apiVideogamesRaw);
  const filteredApi = apiVideogames.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));
  const result = [...dbVideogames, ...filteredApi];
  if (result.length === 0) {
    return { message: `No se encontró ningún videojuego que coincida con: '${name}'.` };
  }
  return result.slice(0, 15);
};


module.exports = {
    createVideoGame,
    getVideogameById,
    getAllGames,
    getVideogameByName
};
const { Op } = require('sequelize');
const { Videogame } = require('../db.js');
const axios = require ('axios');
const {KEY,URL} = process.env;


//Controller post videogame.
const createVideoGame = async (name,description,platforms,image,release,rating,genre) => {
    return await Videogame.create({name,description,platforms,image,release,rating,genre});
};

//controller get videogame by id.
// ! PENDIENTES Tiene que incluir los datos del género del videojuego al que está asociado.
const  getVideogameById = async (id,source) => {
        const response = 
        source === "api"
        ?await axios.get(`${URL}/games/${id}?key=${KEY}`)
        :await Videogame.findByPk(id);
        if (source === "api") {
            const { name, description, released, platforms } = response.data;
            return { name, description, released, platforms };
          } else {
            return response;
          }
    };
    
// controller get all games.

const cleanArray = (arr)=> 
        arr.map(elem=>{
            return{
                id:elem.id,
                name:elem.name,
                description:elem.description,
                platform:"NIY",//aqui debe ir un array con las plataformas obtenidas.
                image:elem.background_image,
                released:elem.released,
                rating:elem.rating,
                genre:"NIY",
                created:false
            }
         });

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
    }
  });

  const apiVideogamesRaw = (await axios.get(`${URL}/games?key=${KEY}`)).data.results;
  const apiVideogames = cleanArray(apiVideogamesRaw);
  const filteredApi = apiVideogames.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));
  const result = [...dbVideogames, ...filteredApi];
  if (result.length === 0) {
    return { message: `No se encontró ningún videojuego que coincida con: '${name}'.` };
  }
    return result;
};

module.exports = {
    createVideoGame,
    getVideogameById,
    getAllGames,
    getVideogameByName
};
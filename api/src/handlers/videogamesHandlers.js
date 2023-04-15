const axios = require('axios');
const {Videogame} = require('../db.js');
const {createVideoGame,getVideogameById, getVideogameByName, getAllGames} = require ('../controllers/videogamesControllers.js')

// Getting handlers.

const getVideogamesHandler = async (req,res)=>  {
    const {name} = req.query;

    const results = name?await getVideogameByName(name):await getAllGames();

    if (name){
         res.send( results);

} else{
        res.send (await results);
        console.log( await results);
    }

    // Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.
    /* Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
    Debe poder buscarlo independientemente de mayúsculas o minúsculas.
    Si no existe el videojuego, debe mostrar un mensaje adecuado.
    Debe buscar tanto los de la API como los de la base de datos. */
};


const getVideogameByIdHandler = async (req,res)=>{
    const {id} = req.params;
    const source = isNaN(id)?"db":"api";
    try {
        const videoGame = await getVideogameById(id,source)
        res.status(200).json(videoGame);
        console.log(videoGame);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};



// Posting handlers
const postVideogamesHandler = async (req,res)=>{

    try {
    const {name,description,platforms,image,release,rating,genre}= req.body;
    const newVideoGame = await createVideoGame(name,description,platforms,image,release,rating,genre);
    // newVideoGame.addGenre(genreId);
    res.status(201).json(newVideoGame);
        console.log(newVideoGame.dataValues);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

/*  Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
 */
};

module.exports = {
    getVideogamesHandler,
    getVideogameByIdHandler,
    postVideogamesHandler
}
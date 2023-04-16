const axios = require('axios');
const {Videogame} = require('../db.js');
const {createVideoGame,getVideogameById, getVideogameByName, getAllGames} = require ('../controllers/videogamesControllers.js')

// Getting handlers.
// Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
const getVideogamesHandler = async (req,res)=>  {
    const {name} = req.query;
    const results = name?await getVideogameByName(name):await getAllGames();

    if (name){
         res.send(await results);

} else{
        res.send (await results);
        console.log(await results);
    }
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
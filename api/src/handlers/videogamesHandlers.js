const axios = require('axios');
const {Videogame} = require('../db.js');
const {createVideoGame,getVideogameById, getVideogameByName, getAllGames} = require ('../controllers/videogamesControllers.js')

// Getting handlers.
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
    const {name,description,platforms,image,release,rating,genre}= req.body;
    try {
        if(!name||!description||!platforms||!image||!release||!rating||!genre) throw Error("Missing data");
    const newVideoGame = await createVideoGame(name,description,platforms,image,release,rating,genre);
    
    res.status(201).json(newVideoGame);
        console.log(newVideoGame.dataValues);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
    getVideogamesHandler,
    getVideogameByIdHandler,
    postVideogamesHandler
}
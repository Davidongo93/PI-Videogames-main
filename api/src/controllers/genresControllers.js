const axios = require('axios');
const {KEY,URL} = process.env;
const {Genre} = require('../db.js');
    
    const createGenre = async ()=> 
    await axios.get(`${URL}/genres?key=${KEY}`)
    .then(async(response)=>{
        const data = response.data.results;
        const genres = data.map((genre) => genre.name);
        const newGenres = await Genre.bulkCreate(genres.map((name) => ({ name })));
        console.log(data)
});

module.exports = createGenre;

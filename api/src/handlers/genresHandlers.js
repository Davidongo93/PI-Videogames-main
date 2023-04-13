const createGenre = require ('../controllers/genresControllers')

const getGenresHandler =  async (req,res)=>{

    try {
    const newGenre = await createGenre();
    res.status(201).json({
        success: true,
        message: 'Géneros cargados exitosamente en la base de datos'
    });

    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = getGenresHandler;
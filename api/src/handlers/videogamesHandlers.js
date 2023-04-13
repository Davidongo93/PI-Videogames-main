const createVideoGame = require ('../controllers/videogamesControllers.js')

// Getting handlers.

const getVideogamesHandler = (req,res)=>{
    const {name} = req.query;
    if (name) res.send(`Buscando juego llamado ${name}`);
    else res.send ('se muestran todos los juegos');

    // Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.
    /* Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
    Debe poder buscarlo independientemente de mayúsculas o minúsculas.
    Si no existe el videojuego, debe mostrar un mensaje adecuado.
    Debe buscar tanto los de la API como los de la base de datos. */
};

const getVideogameByIdHandler = (req,res)=>{
    const {id} = req.params;
    res.send(`id imput example is ${id}`)
/* Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
El videojuego es recibido por parámetro (ID).
Tiene que incluir los datos del género del videojuego al que está asociado.
Debe funcionar tanto para los videojuegos de la API como para los de la base de datos. */
};

// Posting handlers
const postVideogamesHandler = async (req,res)=>{

    try {
    const {name,description,platforms,image,release,rating}= req.body;
    const newVideoGame = await createVideoGame(name,description,platforms,image,release,rating);
    res.status(201).json(newVideoGame);

    } catch (error) {
        res.status(400).json({error:error.message});
    }

/*  Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
Nombre. *
Descripción. *
Plataformas. *
Imagen. *
Fecha de lanzamiento. *
Rating. * */
};

module.exports = {
    getVideogamesHandler,
    getVideogameByIdHandler,
    postVideogamesHandler
}
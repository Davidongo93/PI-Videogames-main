const { Router } = require('express');
const videogamesRouter = Router();

videogamesRouter.get('/',(req,res)=>{
    res.send("videogame route")
    // Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.
});
videogamesRouter.get('/name?=',(req,res)=>{
    res.send("videogame by Name")
/* Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el videojuego, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos. */
});

videogamesRouter.get('/:id',(req,res)=>{
    res.send("videogame por ID")
/* Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
El videojuego es recibido por parámetro (ID).
Tiene que incluir los datos del género del videojuego al que está asociado.
Debe funcionar tanto para los videojuegos de la API como para los de la base de datos. */
});


videogamesRouter.post('/',(req,res)=>{
    res.send("post-a-game")
/*  Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno). */
});
module.exports = videogamesRouter;
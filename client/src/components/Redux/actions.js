import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";

export const getVideogame = (id) =>{
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/videogames/${id}`)
        const videoGame = apiData.data;
        dispatch({type:GET_VIDEOGAME,payload:videoGame})
    }
}


export const getVideogames = ()=>{
    return async function (dispatch){
        const apiData = await axios.get("http://localhost:3001/videogames");
        const videoGames = apiData.data;
        console.log(videoGames);
        dispatch({type:GET_VIDEOGAMES,payload:videoGames})
    };
}
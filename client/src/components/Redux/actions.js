import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const GET_SORTED_AZ = "GET_SORTED_AZ";

export const getVideogame = (id) =>{
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/videogames/${id}`)
        const videoGame = apiData.data;
        console.log(videoGame);
        dispatch({type:GET_VIDEOGAME,payload:videoGame})
    }
}


export const getVideogames = ()=>{
    return async function (dispatch){
        const apiData = await axios.get("http://localhost:3001/videogames");
        const videoGames = apiData.data;
        dispatch({type:GET_VIDEOGAMES,payload:videoGames})
    };

}
    export const getVideogamesSorted = ()=>{
        return async function (dispatch){
            const apiData = await axios.get("http://localhost:3001/videogames");
            const videoGames = apiData.data;
            const sortedVideoGameAZ = videoGames.sort((a,b)=> a-b);
            dispatch({type:GET_SORTED_AZ,payload:sortedVideoGameAZ})
        };
    };
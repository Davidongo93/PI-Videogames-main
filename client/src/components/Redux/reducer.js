import { GET_VIDEOGAMES ,GET_VIDEOGAME, GET_SORTED_AZ} from "./actions";


const initialState = {
    videoGames:[],
    videoGame: [],
    sortedVideoGameAZ: []
};
 const rootReducer = (state = initialState,action)=>{
    switch (action.type) {

        case GET_VIDEOGAMES:
            return{...state,videoGames:action.payload};
            
        case GET_VIDEOGAME:
                return{...state,videoGame:action.payload};

        case GET_SORTED_AZ:

                return{...state,sortedVideoGameAZ:action.payload};

       
       default:
        return {...state};
    }
 };
 export default rootReducer;

// numeros.sort((a, b) => a - b)
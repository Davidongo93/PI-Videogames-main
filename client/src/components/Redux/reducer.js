import { GET_VIDEOGAMES ,GET_VIDEOGAME} from "./actions";


const initialState = {
    videoGames:[],
    videoGame: []
};
 const rootReducer = (state = initialState,action)=>{
    switch (action.type) {

        case GET_VIDEOGAMES:
            return{...state,videoGames:action.payload};
            
            case GET_VIDEOGAME:
                return{...state,videoGame:action.payload};
       
       default:
        return {...state};
    }
 };
 export default rootReducer;
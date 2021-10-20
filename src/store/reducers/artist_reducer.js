import {ARTISTLIST_ALL,GET_ARTIST_SEARCH} from '../types';
export default function(state = {},action) {
    switch(action.type){
        case ARTISTLIST_ALL:
            return {
                ...state,
                artistList: action.payload
            }
        case GET_ARTIST_SEARCH:
            return{
                ...state,
                artistList: action.payload
            }
        default:
            return state;
    }
}
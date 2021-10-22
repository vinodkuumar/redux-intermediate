import {
    ARTISTLIST_ALL,
    GET_ARTIST_SEARCH,
    GET_ARTIST_DETAIL,
    CLEAR_ARTIST_DETAIL
} from '../types';
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
        case GET_ARTIST_DETAIL:
            return {
                ...state,
                artistData: action.payload
            }
        case CLEAR_ARTIST_DETAIL:
            return {
                ...state,
                artistData: action.payload
            }
        default:
            return state;
    }
}
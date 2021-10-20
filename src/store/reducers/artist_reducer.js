import {ARTISTLIST_ALL} from '../types';
export default function(state = {},action) {
    switch(action.type){
        case ARTISTLIST_ALL:
            return {
                ...state,
                artistList: action.payload
            }
        default:
            return state;
    }
}
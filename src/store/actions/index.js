import axios from 'axios';
import {
    ARTISTLIST_ALL,
    GET_ARTIST_SEARCH,
    GET_ARTIST_DETAIL
} from '../types';

const URL = "http://localhost:3004";

export const getArtists = () => {
    const request = axios.get(`${URL}/artists?_limit=6`)
    .then(response => response.data);
    return {
        type: ARTISTLIST_ALL,
        payload: request
    }
}

export const artistListSearch = (keywords) => {
    const request = axios.get(`${URL}/artists?q=${keywords}&&_limit=6`)
    .then(response => response.data)
    return {
        type: GET_ARTIST_SEARCH,
        payload: request
    }
}

export const artistsDetail = (id) => {
    const request = axios.get(`${URL}/artists?id=${id}`)
    .then(response => response.data)
    return {
        type: GET_ARTIST_DETAIL,
        payload: request
    }
}
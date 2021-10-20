import axios from 'axios';
import {ARTISTLIST_ALL} from '../types';

const URL = "http://localhost:3004";

export const getArtists = () => {
    const request = axios.get(`${URL}/artists?_limit=6`)
    .then(response => response.data);
    return {
        type: ARTISTLIST_ALL,
        payload: request
    }
}
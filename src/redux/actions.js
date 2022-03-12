import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";

export function setListView(value) {
    return {
        type: actionTypes.SET_LIST_VIEW,
        payload: value,
    }
}

export function setMovies(value) {
    return {
        type: actionTypes.SET_MOVIES,
        payload: value,
    }
}

export function addFavoriteMovie(movie) {
    return {
        type: actionTypes.ADD_FAVORITE_MOVIE,
        payload: movie,
    }
}

export function removeFavoriteMovie(movie) {
    return {
        type: actionTypes.REMOVE_FAVORITE_MOVIE,
        payload: movie,
    }
}

export function setFavoriteMovies(movies) {
    return {
        type: actionTypes.SET_FAVORITE_MOVIES,
        payload: movies,
    }
}

export function getMovies(path, params) {
    return async (dispatch) => {
        try {
            axios.get(`${constants.baseUrl}${path}` , {
                params: {...params, api_key: constants.apiKey}
            })
            .then(response => {
                dispatch(setMovies(response.data.results));
            })
        } catch (error){
            console.log(error);
        }
    }
}
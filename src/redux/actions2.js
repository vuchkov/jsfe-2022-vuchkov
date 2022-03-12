import actionTypes2 from "./action-types2";
import axios from "axios";
import constants2 from "../constants2";

export function setListView(value) {
    return {
        type: actionTypes2.SET_LIST_VIEW,
        payload: value,
    }
}

export function setMovies(value) {
    return {
        type: actionTypes2.SET_MOVIES,
        payload: value,
    }
}

export function getMovies(path, params) {
    return async (dispatch) => {
        try {
            axios.get(`${constants2.url}${path}` , {
                params: {...params, apikey: constants2.apikey}
            })
            .then(response => {
                dispatch(setMovies(response.data.Search));
            })
        } catch (error){
            console.log(error);
        }
    }
}
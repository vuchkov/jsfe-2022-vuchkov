import React, { useContext, useState } from "react";
import axios from 'axios';
import constants2 from '../../constants2';

const MovieContext = React.createContext();

export function useMovie() {
    return useContext(MovieContext);
}

export function MovieProvider(props) {

    const [byName, setByName] = useState('Matrix');
    const [byYear, setByYear] = useState('');

    const [listView, setListView] = useState(true);

    const [movies, setMovies] = useState([]);

    const fetchMovies = (path, params) => {
        axios.get(`${constants2.url}${path}` , {
            params: {...params, apikey: constants2.apikey}
        })
        .then(response => {
            setMovies(response.data.results);
        })
        console.log(params);
    }

    return (
        <MovieContext.Provider value={{
                byName,
                setByName,
                byYear,
                setByYear,
                movies,
                setMovies,
                fetchMovies,
                listView,
                setListView,
            }}>
            {props.children}
        </MovieContext.Provider>
    )
}
import React, { useContext, useState } from "react";
import axios from 'axios';
import constants from '../../constants';
import moment from "moment";

const MovieContext = React.createContext();

export function useMovie() {
    return useContext(MovieContext);
}
export function MovieProvider(props) {

    const [selectedSortBy, setSelectedSortBy] = useState("popularity.desc");
    const startFrom = moment().subtract(1, 'years').toDate();
    const [startDate, setStartDate] = useState(startFrom);
    const [endDate, setEndDate] = useState(new Date());
    
    const [checkedState, setCheckedState] = useState(
        new Array(4).fill(false)
    );

    const [listView, setListView] = useState(true);


    const [movies, setMovies] = useState([]);

    const fetchMovies = (path, params) => {
        axios.get(`${constants.baseUrl}${path}` , {
            params: {...params, api_key: constants.apiKey}
        })
        .then(response => {
            setMovies(response.data.results);
        })
    }

    return (
        <MovieContext.Provider value={{
                selectedSortBy, 
                setSelectedSortBy,
                startDate,
                setStartDate,
                endDate,
                setEndDate,
                checkedState,
                setCheckedState,
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
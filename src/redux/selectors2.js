import { createSelector } from '@reduxjs/toolkit'

const selectMovies = state => state.movies

export const countMovies = createSelector(
    selectMovies, 
    items => {
        if(!items.length){
            return 0;
        }
        return (items.length);
    }
)
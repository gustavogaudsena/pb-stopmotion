import { createContext, useContext, useEffect, useReducer, useState } from "react";
import apiHandler from "../api/tmdb.api";


const MoviesContext = createContext(null)

export function MoviesProvider({ children }) {
    const [movies, dispatch] = useReducer(moviesReducer, []);

    useEffect(() => {
        dispatch(movies, 'update')
    }, [])

    useEffect(() => {
        console.log(movies)
    }, [movies])

    return (
        <MoviesContext.Provider value={{ movies, moviesDispatch: dispatch }} >
            {children}
        </MoviesContext.Provider>
    )
}

const moviesReducer = async (movies, action) => {
    switch (action) {
        default: {

        }
        case 'update': {
            const movieList = await apiHandler.discoverMovies();
            return movieList;
        }

    }
}

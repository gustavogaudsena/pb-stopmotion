import { createContext, useContext, useEffect, useReducer, useState } from "react";

const MoviesContext = createContext(null)

export function MoviesProvider({ children }) {
    const [query, setQuery] = useState('');
    const [movies, dispatch] = useReducer(moviesReducer, []);

    function setMovies(data) {
        dispatch({ type: 'update', data })
    }

    const contextValues = { movies, setMovies, query, setQuery }

    return (
        <MoviesContext.Provider value={contextValues} >
            {children}
        </MoviesContext.Provider>
    )
}

export function useMoviesContext() {
    return useContext(MoviesContext);
}

const moviesReducer = (movies, action) => {
    switch (action.type) {
        case 'update': {
            return action.data;
        }
        default: {
            return movies
        }

    }
}

const queryReducer = (query, action) => {
    switch (action.type) {
        case 'update': {
            return action.data;
        }
        default: {
            return query
        }

    }
}

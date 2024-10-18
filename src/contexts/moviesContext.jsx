import { createContext, useContext, useEffect, useReducer } from "react";

const MoviesContext = createContext(null)

export function MoviesProvider({ children }) {
    const [movies, dispatch] = useReducer(moviesReducer, []);

    function setMovies(data) {
        dispatch({ type: 'update', data })
    }

    return (
        <MoviesContext.Provider value={{ movies, setMovies }} >
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

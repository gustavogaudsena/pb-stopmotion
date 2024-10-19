import { useCallback, useState } from 'react';
import useMovies from '../../hooks/useMovies';
import styles from './styles.module.css'
import { debounce } from 'lodash';
import { useMoviesContext } from '../../contexts/moviesContext';

export default function SearchBar() {
    const { searchMovie, clearQuery } = useMovies();
    const { query, setQuery } = useMoviesContext()

    const handleSearch = (e) => {
        const newValue = e.target.value
        setQuery(newValue)
        searchMovie(newValue);
    }

    const clearSearch = (e) => {
        setQuery('')
        searchMovie('')
    }
    return (
        <form className={styles.searchBarForm}>
            <input
                className={styles.searchBarInput}
                type='text'
                onChange={handleSearch}
                value={query}
                placeholder='Animação'
            />

            <button type='button' onClick={clearSearch}>
                Limpar
            </button>
        </form >

    )
}
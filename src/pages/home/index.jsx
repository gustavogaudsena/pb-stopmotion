import { useContext, useEffect, useState } from 'react';
import Header from '../../components/header';
import MovieList from '../../components/movieList';
import styles from './styles.module.css';
import { useMoviesContext } from '../../contexts/moviesContext';
import { useLoaderData } from 'react-router-dom';


export default function Home() {
    const [busca, setBusca] = useState('');
    const { movies, setMovies } = useMoviesContext()

    const loader = useLoaderData()

    useEffect(() => {
        setMovies(loader.movies)
    }, [])

    return (
        <div className={styles.home}>
            <Header busca={busca} setBusca={setBusca} />
            <MovieList busca={busca} />
        </div>
    )
}
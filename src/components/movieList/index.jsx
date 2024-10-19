import styles from './styles.module.css'
import Card from '../card';
import { useMoviesContext } from '../../contexts/moviesContext';
import MovieListController from './movieListController';

export default function MovieList() {
    const { movies, setMovies, query } = useMoviesContext()

    return (
        <div className={styles.movieList}>
            <MovieListController />

            <div className={styles.movieListContainerCards}>
                {
                    movies &&
                    movies.map(movie =>
                        <Card movie={movie} key={movie.id} />
                    )
                }
                {
                    !movies.length &&
                    <div className={styles.movieListNotFound}>
                        {
                            query &&
                            'Não foi encontrado nenhum filme com o nome buscado'
                        }
                        {
                            !query &&
                            'Não foi encontrado nenhum filme'
                        }
                    </div>
                }
            </div>
        </div>
    )
}
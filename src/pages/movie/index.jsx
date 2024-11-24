import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useLoaderData, useParams } from 'react-router-dom';
import HeaderMovies from '../../components/headerMovies';
import Stars from '../../components/stars';
import Badge from '../../components/badge';
import AvatarLabel from '../../components/avatarLabel';
import Footer from '../../components/footer';
import MovieFrame from '../../components/movieFrame';
import useTheme from '../../hooks/useTheme';

export default function Movie() {
    const { id } = useParams()
    const { theme, toggleTheme } = useTheme()
    const [movie, setMovie] = useState(null)
    const loader = useLoaderData()
    const [movieDate, setMovieDate] = useState('')

    useEffect(() => {
        setMovie(loader.movie)
        if (loader.movie.release_date) setMovieDate((new Date(loader.movie.release_date)).toLocaleDateString('pt-BR'))
    }, [])

    return (
        <>
            <div data-theme={theme}>
                <div className={styles.movies} >
                    <HeaderMovies movie={movie} />
                    {
                        movie &&
                        <div className={styles.moviesContainer}>
                            <div className={styles.moviesContainerHeader}>
                                <div className={styles.moviesContainerNome}>
                                    <h2>{movie.title}</h2>
                                    <h3>{movie.originalTitle}</h3>
                                </div>
                                <div className={styles.moviesClassificacao}>
                                    <Stars stars={movie.stars} />
                                </div>
                            </div>
                            <div className={styles.moviesContainerPrincipal}>
                                <div className={styles.moviesImagens}>
                                    <img
                                        className={styles.moviesImagemPrincipal}
                                        src={movie.imagens.principal.src}
                                    />
                                </div>
                                <div className={styles.moviesContainerDescricao}>

                                    <div className={styles.moviesDescricao}>
                                        <h3>Sinopse</h3>
                                        <p>{movie.overview ? movie.overview : 'Sem informações de sinopse.'}</p>
                                    </div>
                                    <div className={styles.moviesDescricao}>
                                        <b>Data lançamento: </b>
                                        <span>{movieDate}</span>
                                    </div>
                                    {
                                        movie.videos.results &&
                                        movie.videos.results.length > 0 &&
                                        movie.videos.results[0]?.key &&
                                        <MovieFrame movieKey={movie.videos.results[0]?.key} />
                                    }
                                    {
                                        movie.genres &&
                                        <div className={styles.moviesBadgesContainer}>
                                            <b>Generos: </b>
                                            <div className={styles.moviesBadges}>
                                                {
                                                    movie.genres.length > 0 &&
                                                    movie.genres.map((genre) => <Badge key={`genre_${genre.id}`} name={genre.name} />)
                                                }
                                            </div>
                                        </div>
                                    }
                                    {
                                        movie.production_companies &&
                                        <div className={styles.moviesCompaniesContainer}>
                                            <b>Produtoras: </b>
                                            <div className={styles.moviesCompanies}>
                                                {
                                                    movie.production_companies.length > 0 &&
                                                    movie.production_companies.map((company) => <AvatarLabel key={`genre_${company.id}`} name={company.name} logo={company.logo_path} />)
                                                }
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    }
                    {
                        !movie &&
                        <div className={styles.moviesNotFound}>
                            Não foi encontrado nenhum filme para esse id.
                        </div>
                    }
                </div>
            <Footer />
            </div >
        </>
    )
}
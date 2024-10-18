import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Link, useLoaderData, useParams } from 'react-router-dom';

export default function Movie() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const loader = useLoaderData()

    useEffect(() => {
        setMovie(loader.movie)
    }, [])

    return (
        <div className={styles.home}>
            <Link to='/'>Voltar</Link>
            <div>
                {movie.title}
            </div>
            <div>
                {movie.original_title}
            </div>
            <div>
                {movie.overview}
            </div>
        </div>
    )
}
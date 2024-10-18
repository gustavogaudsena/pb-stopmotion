import { useContext, useEffect, useState } from 'react'
import styles from './styles.module.css'
import Card from '../card';
import { IoIosStar } from "react-icons/io";
import { LuMoveDown, LuMoveUp } from "react-icons/lu";
import useTheme from '../../hooks/useTheme';
import { useMoviesContext } from '../../contexts/moviesContext';
import { useLoaderData } from 'react-router-dom';
import { GrNext, GrPrevious } from "react-icons/gr";

export default function MovieList({ busca }) {
    const [ordernacaoBy, setOrdenacaoBy] = useState('');
    const [ordenacaoAsc, setOrdenacaoAsc] = useState(false);
    const { theme } = useTheme()
    const { movies, setMovies } = useMoviesContext()
    const [pages, setPages] = useState({ page: 0, total_pages: 0 })
    const selectedColor = theme === 'dark' ? 'var(--secondary)' : 'var(--primary)';

    const loader = useLoaderData()

    // Função de ordenação basica
    const handleOrdenacao = (event) => {
        const key = event.currentTarget.value;

        const validKey = movies.every(filme => Object.keys(filme).includes(key))
        if (!validKey) return

        setOrdenacaoBy(key);
        setOrdenacaoAsc(!ordenacaoAsc)

        const filmesOrdenados = movies.sort((a, b) => ordenacaoAsc ? b[key] - a[key] : a[key] - b[key])
        setMovies(filmesOrdenados)
    }

    const handleNextPage = () => {
        
    }

    const handlePreviousPage = () => {

    }

    useEffect(() => {
        const { page, total_pages, ..._ } = loader
        setPages({ page, total_pages })
    }, [loader])

    return (
        <div className={styles.movieList}>
            <div className={styles.movieListContainerControle}>
                <div className={styles.movieListOrdenacao}>
                    <button onClick={handleOrdenacao} value='popularity'>
                        <IoIosStar />
                        <span>Popularidade</span>
                        <span className={styles.movieListOrdenacaoArrows}>
                            <LuMoveDown
                                color={
                                    ordernacaoBy == 'popularity' && !ordenacaoAsc
                                        ? selectedColor
                                        : undefined
                                }
                            />
                            <LuMoveUp
                                color={
                                    ordernacaoBy == 'popularity' && ordenacaoAsc
                                        ? selectedColor
                                        : undefined
                                } />
                        </span>
                    </button>
                </div>
                <div className={styles.movieListOrdenacao}>
                    <span>Paginas</span>
                    <button onClick={handlePreviousPage} value='previous'>
                        <GrPrevious />
                    </button>
                    <span className={styles.movieListOrdenacaoArrows}>
                        {pages.page} / {pages.total_pages}
                    </span>
                    <button onClick={handleNextPage} value='next'>
                        <GrNext />
                    </button>
                </div>
            </div>
            <div className={styles.movieListContainerCards}>
                {
                    movies &&
                    movies.map(filme =>
                        <Card filme={filme} key={filme.id} />
                    )
                }
                {
                    !movies.length &&
                    <div className={styles.movieListNotFound}>
                        {
                            busca &&
                            'Não foi encontrado nenhum filme com o nome buscado'
                        }
                        {
                            !busca &&
                            'Não foi encontrado nenhum filme'
                        }
                    </div>
                }
            </div>
        </div>
    )
}
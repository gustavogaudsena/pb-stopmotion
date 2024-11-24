import { GrNext, GrPrevious } from "react-icons/gr";
import { IoIosStar } from "react-icons/io";
import { LuMoveDown, LuMoveUp } from "react-icons/lu";
import { FaFireFlameCurved } from "react-icons/fa6";
import styles from './styles.module.css'
import useMovies from "../../../hooks/useMovies";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { SORT_TYPES_MAP } from "../../../utils/constants";
import { useMoviesContext } from "../../../contexts/moviesContext";
import ControllerItem from "../../controllerItem";


export default function MovieListController() {
    const { currentPage, totalPages, setCurrentPage, setTotalPages, nextPage, previousPage, sortMovies, orderBy, sortBy } = useMovies();
    const { query } = useMoviesContext()
    const loader = useLoaderData()

    // Função de ordenação basica
    const handleOrdenacao = (event) => {
        sortMovies({ sortBy: event.currentTarget.value })
    }

    useEffect(() => {
        const { page, total_pages, ..._ } = loader
        setCurrentPage(page)
        setTotalPages(total_pages)
    }, [])

    return (
        <div className={styles.movieListControllerContainer}>
            <div className={styles.movieListOrdenacaoContainer}>
                <div className={styles.movieListOrdenacao}>
                    <ControllerItem
                        handler={handleOrdenacao}
                        icon={<FaFireFlameCurved />}
                        value={SORT_TYPES_MAP.popularity.value}
                        title={SORT_TYPES_MAP.popularity.label}
                        orderBy={orderBy}
                        sortBy={sortBy}
                        disabled={!!query}
                    />
                </div>
                <div className={styles.movieListOrdenacao}>
                    <ControllerItem
                        handler={handleOrdenacao}
                        icon={<IoIosStar />}
                        value={SORT_TYPES_MAP.primary_release_date.value}
                        title={SORT_TYPES_MAP.primary_release_date.label}
                        orderBy={orderBy}
                        sortBy={sortBy}
                        disabled={!!query}
                    />
                </div>
                <div className={styles.movieListOrdenacao}>
                    <ControllerItem
                        handler={handleOrdenacao}
                        icon={<IoIosStar />}
                        value={SORT_TYPES_MAP.vote_average.value}
                        title={SORT_TYPES_MAP.vote_average.label}
                        orderBy={orderBy}
                        sortBy={sortBy}
                        disabled={!!query}
                    />
                </div>
            </div>
            <div className={styles.movieListPaginacao} >
                <button onClick={previousPage} value='previous' disabled={!!query}>
                    <GrPrevious />
                </button>
                <span className={styles.movieListPaginacaoIndicadores}>
                    {currentPage} / {totalPages}
                </span>
                <button onClick={nextPage} value='next' disabled={!!query}>
                    <GrNext />
                </button>
            </div>
        </div>
    )
}

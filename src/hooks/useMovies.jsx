import { useEffect, useRef, useState } from "react";
import { apiService } from "../api/service.api";
import { useMoviesContext } from "../contexts/moviesContext";
import { SORT_TYPES_MAP } from "../utils/constants";


export default function useMovies() {
    const [movieList, setMovieList] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [orderBy, setOrderBy] = useState('desc')
    const [sortBy, setSortBy] = useState(SORT_TYPES_MAP.default.value)

    const { _, setMovies, query, setQuery } = useMoviesContext()

    const fetchMovies = async (options) => {
        const { movies, page, total_pages, ..._ } = await apiService.getMovieList(options);
        setMovies(movies)
        setCurrentPage(page)
        setTotalPages(total_pages)
    };

    const fetchMoviesBySearch = async (options) => {
        const { movies, page, total_pages, ..._ } = await apiService.searchMovie(options);
        setMovies(movies)
        setCurrentPage(page)
        setTotalPages(total_pages)
    };

    const fetch = async (options) => {
        if (options.query) fetchMoviesBySearch({ page: 1, query, orderBy, sortBy, ...options })
        else fetchMovies({ page: 1, orderBy, sortBy, ...options })

    }

    const nextPage = () => {
        const nextPage = currentPage + 1

        if (nextPage > totalPages) return
        fetch({ page: nextPage })
    }

    const previousPage = () => {
        const previousPage = currentPage - 1

        if (!previousPage) return
        fetch({ page: previousPage })
    }

    const sortMovies = (options) => {
        if (!Object.keys(SORT_TYPES_MAP).includes(options.sortBy)) return;

        setSortBy((prevSortBy) => {
            const newSortBy = SORT_TYPES_MAP[options.sortBy].value;
            const newOrderBy = newSortBy !== prevSortBy || (newSortBy === prevSortBy && orderBy === 'asc') ? 'desc' : 'asc';
            fetch({ sortBy: newSortBy, orderBy: newOrderBy })
            setOrderBy(newOrderBy);
            return newSortBy;
        })
    }

    const searchMovie = (search) => {
        fetch({ page: 1, query: search })
    }

    const toogleOrderBy = () => {
        setOrderBy(() => orderBy === 'desc' ? 'asc' : 'desc');
    }

    const clearQuery = () => {

    }

    return {
        fetchMovies,
        setCurrentPage,
        setTotalPages,
        nextPage,
        previousPage,
        sortMovies,
        searchMovie,
        toogleOrderBy,
        clearQuery,
        currentPage,
        totalPages,
        movieList,
        orderBy,
        sortBy
    }
}
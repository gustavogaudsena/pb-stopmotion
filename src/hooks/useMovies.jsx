import { useEffect, useState } from "react";
import { apiService } from "../api/service.api";


export default function useMovies() {
    const [movieList, setMovieList] = useState([])

    const fetchMovies = async ({ sortBy, page }) => {
        const { movies, ..._ } = await apiService.getMovieList({ sortBy, page });
        setMovieList(movieList)
    };

    return { fetchMovies, movieList, setMovieList }
}
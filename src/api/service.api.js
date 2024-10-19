import { GENRE_ANIMATION_ID, IMAGES_BASE_URL, SORT_TYPES_MAP } from "../utils/constants";
import { ApiHandler, apiHandler } from "./handler.api";

class ApiService {
    /**
     * @type {ApiHandler} #apiHandler
     * */
    #apiHandler;

    constructor(apiHandler) {
        this.#apiHandler = apiHandler
    }

    getMovieList = async (options = { sortBy: SORT_TYPES_MAP.default.value, page: 1, orderBy: 'desc' }) => {
        try {
            const sortBy = `${options.sortBy}.${options.orderBy}`
            const data = await this.#apiHandler.getDiscoverMovies(sortBy, options.page)
            const { results, total_pages, total_results, page } = data
            const movies = results.map((movie) => {
                return {
                    id: movie.id,
                    title: movie.title,
                    originalTitle: movie.original_title,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    popularity: movie.popularity,
                    stars: movie.vote_average,
                    imagens: {
                        principal: {
                            src: `${IMAGES_BASE_URL}/w500/${movie.poster_path ?? movie.backdrop_path}`
                        }
                    }
                }
            })
            return { movies, total_pages, total_results, page };
        } catch (e) {
            console.error(e)
        }
    }

    getMovieById = async (id) => {
        try {
            const data = await this.#apiHandler.getMovieDetailsById(id)
            const movie = data
            return movie;
        } catch (e) {
            console.error(e)
        }
    }

    searchMovie = async (options = { sortBy: undefined, page: 1, orderBy: 'desc', query: '' }) => {
        try {
            const sortBy = `${options.sortBy}.${options.orderBy}`
            const data = await this.#apiHandler.searchMovie({ query: options.query, page: options.page, sortBy })
            const { results, total_pages, total_results, page } = data
            const movies = results.filter((movie) => movie.genre_ids.includes(GENRE_ANIMATION_ID)).map((movie) => {
                return {
                    id: movie.id,
                    title: movie.title,
                    originalTitle: movie.original_title,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    popularity: movie.popularity,
                    stars: movie.vote_average,
                    imagens: {
                        principal: {
                            src: `${IMAGES_BASE_URL}/w500/${movie.poster_path ?? movie.backdrop_path}`
                        }
                    }
                }
            })
            return { movies, total_pages, total_results, page };
        } catch (e) {
            console.error(e)
        }
    }
}


const apiService = new ApiService(apiHandler)

export { apiService, ApiService };

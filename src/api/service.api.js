import { IMAGES_BASE_URL } from "../utils/constants";
import { ApiHandler, apiHandler } from "./handler.api";

class ApiService {
    /**
     * @type {ApiHandler} #apiHandler
     * */
    #apiHandler;

    constructor(apiHandler) {
        this.#apiHandler = apiHandler
    }

    getMovieList = async (options = { sortBy: undefined, page: 1 }) => {
        try {
            const data = await this.#apiHandler.getDiscoverMovies(options.sortBy, options.page)
            const { results, total_pages, total_results, page } = data
            const movies = results.map((movie) => {
                return {
                    id: movie.id,
                    title: movie.title,
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
    getMovieById = async (sortBy = undefined, page = 1) => {
        try {
            const data = await this.#apiHandler.getMovieDetailsById(sortBy, page)
            const movie = data
            return movie;
        } catch (e) {
            console.error(e)
        }
    }
}


const apiService = new ApiService(apiHandler)

export { apiService, ApiService };

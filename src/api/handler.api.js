import api from "./api"

const KEYWORD_STOPMOTION_ID = 10121;
const GENRE_ANIMATION_ID = 16;
const LANGUAGE_PT_BR = 'pt-br'

const DISCOVER_MOVIES_URL = '/3/discover/movie'
const MOVIE_DETAILS_URL = '/3/movie'

class ApiHandler {
    #axiosInstance;

    constructor(axiosInstance) {
        this.#axiosInstance = axiosInstance
    }

    getDiscoverMovies = async (sortBy, page) => {
        try {
            const config = {
                params: {
                    with_keywords: KEYWORD_STOPMOTION_ID,
                    with_genres: GENRE_ANIMATION_ID,
                    language: LANGUAGE_PT_BR,
                    sort_by: sortBy,
                    page
                }
            }

            const response = await this.#axiosInstance.get(DISCOVER_MOVIES_URL, config)
            return response.data

        } catch (e) {
            console.error(e)
            throw e;
        }
    }
    getMovieDetailsById = async (id) => {
        /* adult: false

backdrop_path: "/l0Y9OzRWKmlzZcGy4olKaOPXsru.jpg"

belongs_to_collection: null

budget: 40000000

genres: [{id: 10749, name: "Romance"}, {id: 14, name: "Fantasia"}, {id: 16, name: "Animação"}] (3)

homepage: ""

id: 3933

imdb_id: "tt0121164"

origin_country: ["US"] (1)

original_language: "en"

original_title: "Corpse Bride"

overview: "As famílias de Victor e Victoria estão arranjando seu casamento. Nervoso com a cerimônia, Victor vai sozinho à floresta para ensaiar seu…"

popularity: 402.275

poster_path: "/89B6W9mlTfSxeMEFMSyRBViXy83.jpg"

production_companies: [Object, Object, Object, Object, Object] (5)

production_countries: [{iso_3166_1: "GB", name: "United Kingdom"}, {iso_3166_1: "US", name: "United States of America"}] (2)

release_date: "2005-09-12"

revenue: 118133252

runtime: 77

spoken_languages: [{english_name: "English", iso_639_1: "en", name: "English"}] (1)

status: "Released"

tagline: "Houve um grave mal-entendido."

title: "A Noiva Cadáver"

video: false

videos: {results: []}

vote_average: 7.568

vote_count: 9063 */
        try {
            const config = {
                params: {
                    append_to_response: 'videos',
                    language: LANGUAGE_PT_BR
                }
            }

            const response = await this.#axiosInstance.get(`${MOVIE_DETAILS_URL}/${id}`, config)
            return response.data

        } catch (e) {
            console.error(e)
            throw e;
        }
    }
}

const apiHandler = new ApiHandler(api)

export { apiHandler, ApiHandler };

import api from "./api"

const KEYWORD_STOPMOTION_ID = 10121;
const GENRE_ANIMATION_ID = 16;
const LANGUAGE_PT_BR = 'pt-br'

const DISCOVER_MOVIES_URL = '/3/discover/movie'


class ApiHandler {
    #axiosInstance;

    constructor(axiosInstance) {
        this.#axiosInstance = axiosInstance
    }

    discoverMovies = async (sortBy = undefined) => {
        try {
            const config = {
                params: {
                    with_keywords: KEYWORD_STOPMOTION_ID,
                    with_genres: GENRE_ANIMATION_ID,
                    language: LANGUAGE_PT_BR,
                    sort_by: sortBy
                }
            }

            const response = await this.#axiosInstance.get(DISCOVER_MOVIES_URL, config)
            return response.data

        } catch (e) {
            console.error(e)
            throw e;
        }
    }
}

const apiHandler = new ApiHandler(api)

export default apiHandler;

import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_TMDB_URL
})

api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_TMDB_KEY}`
    return config;
})

export default api
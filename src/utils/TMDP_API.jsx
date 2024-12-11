import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';

export const TMDP_API = {
    fetchTrendingMovies: async (timeWindow) => {
        try {
            const response = await axios(`${BASE_URL}/trending/movie/${timeWindow}?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            console.error("Error fetching trending movies:", error);
            throw error;
        }
    },
    fetchMovieDetails: async (movieId) => {
        try {
            const response = await axios(`${BASE_URL}/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching movie details:", error);
            throw error;
        }
    },
    searchMovies: async (query, page) => {
        try {
            const response = await axios(`${BASE_URL}/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}&language=en-US&page=${page}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error searching movies:", error);
            throw error;
        }
    }

}

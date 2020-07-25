import axios from 'axios';

const TMDB_KEY = "2cde3163ac2ee24dc1931bddddf43dfe";

const makeRequest = (path, params) =>
    axios.get(`http://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
        }
    });

//each path 어떻게 처리할 것인지.
const getAnything = async (path, params = {}) => {
    try{
        const {
            data: {results},  //request해서 받은 값. // results = results
            data
        } = await makeRequest(path, params);
        return [results || data, null]; // results = results
    }catch (e){
        return [null, e];
    }
}

export const movieAPI = {
    nowPlaying: () => getAnything('/movie/now_playing'),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything('/movie/upcoming', {region: 'us'}),
    search: query => getAnything('/search/movie', { query }),
    search2: query => `https://api.themoviedb.org/3/search/movie?api_key=2cde3163ac2ee24dc1931bddddf43dfe&language=en-US&query=${query}`,
    movie: id => getAnything('/movie/${id}')
}

export const tvAPI = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: query => getAnything("/search/tv", {query}),
    show: id => getAnything("/tv/${id}")
}

export const apiImage = path => `https://image.tmdb.org/t/p/w500${path}`;

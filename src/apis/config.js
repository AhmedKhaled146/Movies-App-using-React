import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie'
})


export const axiosInstanceImage = axios.create({
    baseURL: 'https://image.tmdb.org/t/p/w500'
})

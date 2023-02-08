

import { config } from "./config.js"

const BASE_URL = config.API_URL
const API_KEY = config.API_KEY

export async function getPopularMovies(page = 1) {
    let data = []
    try {
        const response = await fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`)
        const responseData = await response.json()
        data = responseData?.results
    } catch (error) {
        
    }
    return data
}
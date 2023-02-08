const moviesDiv = document.getElementById("movies")

import { getPopularMovies } from "./api.js";
import { config } from "./config.js";

export async function renderMovies() {
    const movies = await getPopularMovies()
    console.log(movies)
    moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("")
}

function renderSingleMovie(movie) {
    return (
        `
       
        <div class="card mb-3" style="max-width: 540px;>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${config.IMAGE_URL + movie?.poster_path}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title black">${movie?.original_title}</h5>
                        <p class="card-text">${movie?.overview} </br>
                        Género: ${movie?.genre_id} </br>
                        Lenguaje original:${movie?.genre_id} </br>
                        Fecha de estreno:${movie?.release_date}
                        </p>
                        <p class="card-text"><small class="text-muted">Puntuación media:${movie?.vote_average}</small></p>
                    </div>
                </div>
            </div>
        </div>
        `
    )
}
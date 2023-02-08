function getApiSearch() {
    document.getElementById("renderDatos").innerHTML = "";
    const API_KEY = "b1f92f49e73ce521a6231ad05c6879e3";
    const busqueda = document.getElementById("buscador").value;
    $(document).ready(function () {
        // Ejecuto la llamada a la API
        $.ajax({
            // En este caso, solicito películas que tengan "fight club" en sus metadatos
            url:
                "http://api.themoviedb.org/3/search/movie?api_key=" +
                API_KEY +
                "&query=" + busqueda,
            dataType: "jsonp",
            jsonpCallback: "testing",
        }).done(function (response) {
            // En caso de obtener resultados
            if (response.results==0) {
                let container = document.getElementById("renderDatos");
                let div = document.createElement("div");
                let p = document.createElement("p");
                p.append("No se encuentra esa pelicula");
                div.append(p);
                container.appendChild(div);
            } else {
                let container = document.getElementById("renderDatos");
                for (let i = 0; i < response.results.length; i++) {
                    // Voy mostrando línea a línea el título de las películas coincidentes
                    let div = document.createElement("div");
                    let p = document.createElement("p");
                    let titulo = document.createElement("h1");
                    let overview = document.createElement("h3");
                    let fecha = document.createElement("h4")
                    let votos = document.createElement("h4");
                    let img = document.createElement("img");
                    img.src = "https://image.tmdb.org/t/p/w500" + response.results[i].poster_path;
                    img.style.width = "250px";
                    img.style.height = "300px";

                    titulo.append(response.results[i].title);
                    overview.append(response.results[i].overview);
                    fecha.append(response.results[i].release_date);
                    votos.append(response.results[i].vote_count);

                    p.append(img);
                    p.append(titulo);
                    p.append(overview);
                    p.append(fecha);
                    p.append(votos);
                    div.append(p);
                    container.appendChild(div);
                }
            }

        });
    });
}

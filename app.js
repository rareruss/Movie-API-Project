// https://pokeapi.co/api/v2/pokemon/{id or name}

const movieListEl = document.querySelector('.movie-list');

async function main() {
    const movies = await fetch("http://www.omdbapi.com/?apikey=42df4fab&s");
    const moviesData = await movies.json()
    movieListEl.innerHTML = moviesData.map((movie) => movieHTML(movie)).join("");
}

main();

 function movieHTML(movie) {
    return `<div class="movie-card">
        <div class="movie-card__container">
            <figure class="movie-card__img"><img src="./assets/nav background.jpg"></figure>
                <h3>${movie.title}</h3>
                    <p><b>Year Released </b> ${movie.year}</p>
            </div>
        </div>`
 }


// https://pokeapi.co/api/v2/pokemon/{id or name}

const movieListEl = document.querySelector('.movie-list');

async function main() {
    const movies = await fetch("http://www.omdbapi.com/?apikey=42df4fab&s=movie");
    const moviesData = await movies.json()
    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
}

main()


 function movieHTML(movie) {
    return `<div class="movie-card">
        <div class="movie-card__container">
            <figure class="movie-card__img"><img src="${movie.Poster}"></figure>
                <h3>${movie.Title}</h3>
                    <p><b>Year Released </b> ${movie.Year}</p>
            </div>
        </div>`
 }

async function onSearchChange(event) {
    const Title = event.target.value;
    renderMovies(Title)
}

async function renderMovies(Title) {
    // const moviesWrapper = document.querySelector('.movie')

    // moviesWrapper.classList += ' movies__loading'

    const movies = await fetch(`http://www.omdbapi.com/?apikey=42df4fab&s=${Title}`)
    const moviesData = await movies.json();
    movieListEl.innerHTML = moviesData.Search?.map(movie => movieHTML(movie)).join("")

    // moviesWrapper.classList.remove('movies__loading')
}

// async function filterMovies(event) {
//     movieListEl.classList += ' movies__loading'
// }



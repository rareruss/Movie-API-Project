const movieListEl = document.querySelector('.movie-list');

async function main() {
    showLoading();
    const movies = await fetch("http://www.omdbapi.com/?apikey=42df4fab&s=movie");
    const moviesData = await movies.json();
    movieListEl.innerHTML = moviesData.Search.map((movie) =>
      movieHTML(movie)
    ).join("");
    hideLoading();
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
    showLoading();

  const movies = await fetch(
    `http://www.omdbapi.com/?apikey=42df4fab&s=${Title}`
  );
  const moviesData = await movies.json();
  movieListEl.innerHTML = moviesData.Search?.map((movie) =>
    movieHTML(movie)
  ).join("");

  hideLoading();
}

function renderFilterMovies(filter) {     

        showLoading();

        if (filter === 'NEW_TO_OLD') {
            movies.sort((a, b) => a.Year - b.Year)
        }

        else if (filter === 'OLD_TO_NEW') {
            movies.sort((a, b) => b.Year - a.Year)
        }

        hideLoading();
        
}

function showLoading() {
  movieListEl.innerHTML = '<div class="loading"> <i class="fa-solid fa-spinner movies__loading--spinner"></i></div>';
  movieListEl.classList.add("movies__loading");
}

function hideLoading() {
  movieListEl.classList.remove("movies__loading");
}

function filterMovies(event) {
    renderFilterMovies(event.target.value)
}
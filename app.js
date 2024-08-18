const movieListEl = document.querySelector(".movie-list");
let movies;
async function main() {
  showLoading();
  const movies = await fetch("https://www.omdbapi.com/?apikey=42df4fab&s=movie");
  const moviesData = await movies.json();
  movieListEl.innerHTML = moviesData.Search.map((movie) =>
    movieHTML(movie)
  ).join("");
  hideLoading();
}

main();

function movieHTML(movie) {
  return `
    <div class="movie-card">
        <div class="movie-card__container">
            <figure class="movie-card__img"><img src="${movie.Poster}"></figure>
                <h3>${movie.Title}</h3>
                    <p><b>Year Released </b> ${movie.Year}</p>
            </div>
        </div>`;
}

async function onSearchChangeandFilter(event) {
  renderMovies(event.target.value)
}

async function onSearchChangeandFilter(event) {
  const filter = document.getElementById("filter").value;
  const searchInput = document.querySelector(".search").value;

  showLoading();

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=42df4fab&s=${searchInput}`
  );
  const moviesData = await response.json();

  if (moviesData.Search) {
   renderFilterMovies(moviesData.Search, filter);
  }

  function renderFilterMovies(movies, filter) {
    showLoading();
    if (filter === "NEW_TO_OLD") {
      movies.sort((a, b) => b.Year - a.Year);
    } else if (filter === "OLD_TO_NEW") {
      movies.sort((a, b) => a.Year - b.Year);
    }
  
    movieListEl.innerHTML = movies.map((movie) => movieHTML(movie)).join("");
    hideLoading();
  }

  hideLoading();
}

function showLoading() {
  movieListEl.innerHTML =
    '<div class="loading"> <i class="fa-solid fa-spinner movies__loading--spinner"></i></div>';
  movieListEl.classList.add("movies__loading");
}

function hideLoading() {
  movieListEl.classList.remove("movies__loading");
}

function openMenu() {
  document.body.classList += " menu--open"
  const element = document.getElementById("nav__row");
  element.classList.remove("padding")
}

function closeMenu() {
   document.body.classList.remove('menu--open')
   const element = document.getElementById("nav__row");
   element.classList += (" padding")
}
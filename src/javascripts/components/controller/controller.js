import allMovies from '../movies/movies';
import allLocations from '../locations/locations';
import singleMovie from '../singleMovie/singleMovie';
import singleLocation from '../singleLocation/singleLocation';
import moviesData from '../../helpers/data/moviesData';

let movies = [];

const initializeMoviesOnLoad = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      allMovies.printAllMovies(movies);
      allLocations.initializeLocations(movies);
    })
    .catch(err => console.error(err));
};

const initializeMovies = (e) => {
  e.preventDefault();
  if (e.target.id === 'exitToMovies') {
    moviesData.getMoviesData()
      .then((resp) => {
        const movieResults = resp.data.movies;
        movies = movieResults;
        allMovies.printAllMovies(movies);
        allLocations.initializeLocations(movies);
        document.getElementById('filters').classList.remove('d-none');
        document.getElementById('filters').classList.add('d-flex');
        document.getElementById('movies').classList.add('ml-4');
      })
      .catch(err => console.error(err));
  }
};

const initializeSingleMovie = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('singleView')) {
    const selectedMovieId = e.target.parentElement.parentElement.parentElement.id;
    movies.forEach((movie) => {
      if (movie.id === selectedMovieId) {
        singleMovie.printSingleMovie(movie);
        singleLocation.setLocations(movie.locations);
        document.getElementById('filters').classList.add('d-none');
        document.getElementById('filters').classList.remove('d-flex');
        document.getElementById('movies').classList.remove('ml-4');
      }
    });
  }
  if (e.target.classList.contains('exitToMovies')) {
    console.error('object');
    initializeMovies();
  }
};

export default { initializeMoviesOnLoad, initializeSingleMovie, initializeMovies };

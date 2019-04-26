import moviesData from '../../helpers/data/moviesData';
import singleLocation from '../singleLocation/singleLocation';

import util from '../../helpers/util';

let movies = [];

const printSingleMovie = (selectedMovie) => {
  let domString = '';
  domString += '<div class="d-flex col-12 justify-content-center">';
  domString += `<div id="${selectedMovie.id}"class="card movie col-4 style="width: 18rem;">`;
  domString += '<div class="card-body">';
  domString += `<h4 class="card-title">${selectedMovie.name}</h4>`;
  domString += `<h5 class="card-subtitle text-muted">${selectedMovie.genre}</h5>`;
  domString += `<p class="card-text text-muted">${selectedMovie.releaseDate}</p>`;
  domString += `<p class="card-text">${selectedMovie.description}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('movies', domString);
  singleLocation.setLocations(selectedMovie.locations);
};

const initializeSingleView = (e) => {
  moviesData.getMoviesData()
    .then((resp) => {
      // get movie results
      const movieResults = resp.data.movies;
      movies = movieResults;
      const selectedMovieId = e.target.parentElement.parentElement.parentElement.id;
      movies.forEach((movie) => {
        if (movie.id === selectedMovieId) {
          printSingleMovie(movie);
        }
      });
      // eventListeners.addClickHandlers();
    })
    .catch(err => console.error(err));
};

export default { initializeSingleView };

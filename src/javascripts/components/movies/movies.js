import eventListeners from '../eventListeners';
import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `<div id="${movie.id}"class="card movie col-4 style="width: 18rem;">`;
    domString += '<div class="card-body">';
    domString += `<h4 class="card-title">${movie.name}</h4>`;
    domString += `<h5 class="card-subtitle text-muted">${movie.genre}</h5>`;
    domString += `<p class="card-text text-muted">${movie.releaseDate}</p>`;
    domString += `<p class="card-text">${movie.description}</p>`;
    domString += '<div class="card-text d-flex flex-row justify-content-between align-items-center text-center">';
    domString += `<p class="mb-0"><small>${movie.locations.length} Locations</small></p>`;
    domString += `<button class="btn btn-link singleView" id="${movie.name}">See more info</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domStringBuilder();
      eventListeners.addClickHandlers();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };

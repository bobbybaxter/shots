import util from '../../helpers/util';

import './movies.scss';

const printAllMovies = (movies) => {
  let domString = '';
  domString += '<div class="d-flex flex-wrap justify-content-left">';
  movies.forEach((movie) => {
    domString += `<div id="${movie.id}" class="card movie p-0 content" style="width: 18rem;">`;
    domString += '<div class="card-body">';
    domString += `<h4 class="card-title text-dark mb-1">${movie.name}</h4>`;
    domString += '<div class="card-text d-flex flex-row justify-content-between align-items-center text-center">';
    domString += `<h6 class="card-text text-muted">${movie.genre}</h6>`;
    domString += `<h6 class="card-text text-muted">${movie.releaseDate}</h6>`;
    domString += '</div>';
    domString += `<p class="card-text text-dark border-bottom border-bottom-light py-3 mb-3">${movie.description}</p>`;
    domString += '<div class="card-text d-flex flex-row justify-content-between align-items-center text-center">';
    domString += `<p class="mb-0"><small>${movie.locations.length} Locations</small></p>`;
    domString += `<button class="btn btn-link singleView shadow" id="${movie.name}">See more info</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';

  util.printToDom('movies', domString);
};

export default { printAllMovies };

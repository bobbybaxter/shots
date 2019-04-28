import util from '../../helpers/util';

const printSingleMovie = (selectedMovie) => {
  let domString = '';
  domString += '<div class="d-flex col-12 justify-content-center">';
  domString += `<div id="${selectedMovie.id}" class="card movie p-0 content col-4" style="width: 18rem;">`;
  domString += '<div class="card-body">';
  domString += `<h4 class="card-title text-dark mb-1">${selectedMovie.name}</h4>`;
  domString += '<div class="card-text d-flex flex-row justify-content-between align-items-center text-center">';
  domString += `<h6 class="card-text text-muted">${selectedMovie.genre}</h6>`;
  domString += `<h6 class="card-text text-muted">${selectedMovie.releaseDate}</h6>`;
  domString += '</div>';
  domString += `<p class="card-text text-dark border-bottom border-bottom-light py-3 mb-3">${selectedMovie.description}</p>`;
  domString += '<div class="card-text d-flex flex-row justify-content-between align-items-center text-center">';
  domString += `<p class="mb-0"><small>${selectedMovie.locations.length} Locations</small></p>`;
  domString += '<button id="exitToMovies" type="button" class="close exitToMovies" data-dismiss="alert" aria-label="Close">';
  domString += '<span id="exitToMovies" aria-hidden="true">&times;</span>';
  domString += '</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('movies', domString);
};

export default { printSingleMovie };

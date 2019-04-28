// import singleMovie from './singleMovie/singleMovie';
// import movies from './movies/movies';
import controller from './controller/controller';

const addClickHandlers = () => {
  const moviesDiv = document.getElementById('movies');
  moviesDiv.addEventListener('click', controller.initializeSingleMovie);
};

const addDeleteHandlers = () => {
  const moviesDiv = document.getElementById('movies');
  moviesDiv.addEventListener('click', controller.initializeMovies);
};

export default { addClickHandlers, addDeleteHandlers };

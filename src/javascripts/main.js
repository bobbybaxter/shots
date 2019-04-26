import movies from './components/movies/movies';
import locations from './components/locations/locations';
// import eventListeners from './components/eventListeners';

import '../styles/main.scss';

const init = () => {
  movies.initializeMovies();
  locations.initializeLocations();
};

init();

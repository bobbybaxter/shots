import '../styles/main.scss';
import controller from './components/controller/controller';
import eventListeners from './components/eventListeners';

const init = () => {
  controller.initializeMoviesOnLoad();
  eventListeners.addClickHandlers();
  eventListeners.addDeleteHandlers();
};

init();

import singleMovie from './singleMovie/singleMovie';

// const eventChecker = (e) => {
//   if (e.target.classList.contains('singleView')) {
//     singleMovie.showSingleMovie(e.target);
//   }
// };

// const eventHandlers = () => {
//   document.addEventListener('click', eventChecker);
// };

// const singleViewEvent = (e) => {
//   const button = e.target;
//   console.error('e.target', singleMovie.printSingleMovie);
// };

const addClickHandlers = () => {
  const singleViewBtns = document.getElementsByClassName('singleView');
  for (let i = 0; i < singleViewBtns.length; i += 1) {
    singleViewBtns[i].addEventListener('click', singleMovie.initializeSingleView);
  }
};

export default { addClickHandlers };

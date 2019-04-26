import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

let singleMovieLocations = [];
let locations = [];

const shootTimeClass = (shootTime) => {
  let selectedClass = '';
  switch (shootTime) {
    case 'Morning':
      selectedClass = 'bg-secondary';
      break;
    case 'Afternoon':
      selectedClass = 'bg-success';
      break;
    case 'Evening':
      selectedClass = 'bg-info';
      break;
    case 'After Dark':
      selectedClass = 'bg-danger';
      break;
    default:
      selectedClass = '';
  }
  return selectedClass;
};

const printSingleLocation = (selectedLocations) => {
  // console.error('fart');
  let domString = '';
  selectedLocations.forEach((location) => {
    domString += `<div id="${location.id}"class="card location col-2" style="width: 18rem;">`;
    domString += `<h5 class="card-header ${shootTimeClass(location.shootTime)}">fart${location.name}</h5>`;
    domString += '<div class="card-body">';
    domString += `<img src=${location.imageUrl} class="card-img-top">`;
    domString += `<p class="card-text"><small>${location.address} Locations</small></p>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};

const checkLocations = (fullLocationArray) => {
  const newLocArray = [];
  for (let i = 0; i < fullLocationArray.length; i += 1) {
    if (singleMovieLocations.indexOf(fullLocationArray[i].id) !== -1) {
      newLocArray.push(fullLocationArray[i]);
    }
  }
  return newLocArray;
};

const getLocationData = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      const newLocations = checkLocations(locations);
      printSingleLocation(newLocations);
    })
    .catch(err => console.error(err));
};

const setLocations = (singleMovieLocs) => {
  singleMovieLocations = singleMovieLocs;
  getLocationData();
};

export default { setLocations };

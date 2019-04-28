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
  let domString = '';
  selectedLocations.forEach((location) => {
    domString += `<div id="${location.id}" class="card d-flex flex-row locations col-4 p-0">`;
    domString += `<div class="${shootTimeClass(location.shootTime)} col-2 p-0"></div>`;
    domString += '<div class="d-flex flex-column p-0 m-0">';
    domString += `<div class="card-body card-image" style="background-image:url(${location.imageUrl});">`;
    domString += `<h5 class="card-header card-header-location">${location.name}</h5>`;
    domString += `<p class="card-text card-body-location"><small>${location.address} Locations</small></p>`;
    domString += '</div>';
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

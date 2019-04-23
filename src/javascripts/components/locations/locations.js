import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div id="${locations.id}"class="card location col-2" style="width: 18rem;">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-header">${location.name}</h5>`;
    domString += `<img src=${location.imageUrl} class="card-img-top">`;
    domString += `<p class="card-text"><small>${location.address} Locations</small></p>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};

const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };

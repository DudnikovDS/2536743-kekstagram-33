import {showErrorMessage} from './util.js';
import {getData} from './api.js';
import {imgFilters} from './filters.js';


let photoSet = [];

const bootstrap = async () => {
  try {
    return await getData();
  } catch(err) {
    showErrorMessage();
  }
};

photoSet = await bootstrap();

if (photoSet) {
  imgFilters.classList.remove('img-filters--inactive');
}

export {photoSet};


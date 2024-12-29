import {showErrorMessage} from './util.js';
import {getData} from './api.js';

let photoSet = [];

const bootstrap = async () => {
  try {
    return await getData();
  } catch(err) {
    showErrorMessage();
  }
};

photoSet = await bootstrap();

export {photoSet};


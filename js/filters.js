import {photoSet} from './show-big-picture.js';
import {renderThumbnails} from './rendering-thumbnails.js';

const imgFilters = document.querySelector('.img-filters');
const imgFiltersButtons = document.querySelectorAll('.img-filters__button');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');


const removesPropertyActive = () => {
  const activeButton = imgFilters.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
};

// обработчик нажатия на кнопку по умолчанию

const onFilterDefaultClick = () => {
  if(!filterDefault.classList.contains('img-filters__button--active')) {
    removesPropertyActive();
    filterDefault.classList.add('img-filters__button--active');
  }
};

filterDefault.addEventListener('click', onFilterDefaultClick);

// обработчик нажатия на кнопку случайные

const onFilterRandomClick = () => {
  if(!filterRandom.classList.contains('img-filters__button--active')) {
    removesPropertyActive();
    filterRandom.classList.add('img-filters__button--active');
  }
};

filterRandom.addEventListener('click', onFilterRandomClick);

export {imgFilters};

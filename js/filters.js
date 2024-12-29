import {photoSet} from './data.js';
import {photoList, renderThumbnails} from './rendering-thumbnails.js';
import {getRandomInteger} from './util.js';

const imgFilters = document.querySelector('.img-filters');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');
const QUANTITY_RANDOM = 10;

// активация меню фильтров
if (photoSet) {
  imgFilters.classList.remove('img-filters--inactive');
}

// функция удаления активного класса в меню фильтрации
const removesPropertyActive = () => {
  const activeButton = imgFilters.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
};

// функция создания случайного массива из случайных элементов
const getRandomArray = (array, length) => {
  const indexArray = [];
  const photoSetRandom = [];
  let i = 0;
  while (i < length) {
    const index = getRandomInteger(0, array.length - 1);
    if(!indexArray.includes(index)) {
      indexArray.push(index);
      photoSetRandom.push(array[index]);
      i += 1;
    }
  }
  return photoSetRandom;
};

// функция очистки списка фотографий
const clearPhotoList = () => {
  const pictures = photoList.querySelectorAll('a.picture');
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].remove();
  }
};

//функция сортировки фотографий по количеству лайков
const sortPhotoList = (photoItemA, photoItemB) => photoItemB.likes - photoItemA.likes;

// обработчик нажатия на кнопку по умолчанию

const onFilterDefaultClick = () => {

  if(!filterDefault.classList.contains('img-filters__button--active')) {
    removesPropertyActive();
    filterDefault.classList.add('img-filters__button--active');
  }
  clearPhotoList();
  renderThumbnails(photoSet);
};

filterDefault.addEventListener('click', onFilterDefaultClick);

// обработчик нажатия на кнопку случайные 10 штук

const onFilterRandomClick = () => {
  if(!filterRandom.classList.contains('img-filters__button--active')) {
    removesPropertyActive();
    filterRandom.classList.add('img-filters__button--active');
  }
  clearPhotoList();
  renderThumbnails(getRandomArray(photoSet, QUANTITY_RANDOM));
};

filterRandom.addEventListener('click', onFilterRandomClick);

// обработчик нажатия на кнопку обсуждаемые

const onFilterDiscussedClick = () => {
  if(!filterDiscussed.classList.contains('img-filters__button--active')) {
    removesPropertyActive();
    filterDiscussed.classList.add('img-filters__button--active');
  }
  clearPhotoList();
  const photoSetSorted = photoSet.slice().sort(sortPhotoList);
  renderThumbnails(photoSetSorted);
};

filterDiscussed.addEventListener('click', onFilterDiscussedClick);

export {imgFilters};

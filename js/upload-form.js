import {body} from './show-big-picture.js';
import {closeModalWindow} from './util.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCloseButton = imgUploadForm.querySelector('.img-upload__cancel');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview');
const imgUploadPreviewImg = imgUploadForm.querySelector('.img-upload__preview img');

// поля формы и элементы управления
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const scaleControlValue = imgUploadForm.querySelector('.scale__control--value');
const scaleControlSmaller = imgUploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadForm.querySelector('.scale__control--bigger');
const effectLevelValue = imgUploadForm.querySelector('.effect-level__value');
const effectLevelSlider = imgUploadForm.querySelector('.effect-level__slider');
const effectsRadio = imgUploadForm.querySelectorAll('.effects__radio');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');

// функция открытия окна редактирования фотографии
const onimgUploadInputChange = () => {
  body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentCloseByEscape);
  effectLevelSlider.classList.add('hidden');
};

imgUploadInput.addEventListener('change', onimgUploadInputChange);

// функция по сбросу всех ранее введенных значений
const imgUploadFormReset = () => {
  imgUploadInput.value = null;
  scaleControlValue.value = '100%';
  imgUploadPreviewImg.style.transform = 'none';
  scaleControlSmaller.disabled = false;
  scaleControlBigger.disabled = false;
  effectLevelValue.value = '';
  for (let i = 0; i < effectsRadio.length; i++) {
    if(i !== 0) {
      effectsRadio[i].checked = false;
    }
  }
  imgUploadPreviewImg.style.filter = 'none';
  effectsRadio[0].checked = true;
  textHashtags.value = '';
  textDescription.value = '';
};

// функция закрытия окна редактирования по кнопке закрыть
const onImgUploadCloseButtonClick = () => {
  closeModalWindow(imgUploadOverlay, body, onDocumentCloseByEscape);
  imgUploadFormReset();
};

imgUploadCloseButton.addEventListener('click', onImgUploadCloseButtonClick);

// обработчик при нажатии клавиши escape
function onDocumentCloseByEscape(evt) {
  if (evt.key === 'Escape') {
    if (!(document.activeElement.classList.contains('text__hashtags') || document.activeElement.classList.contains('text__description'))){
      imgUploadFormReset();
      closeModalWindow(imgUploadOverlay, body, onDocumentCloseByEscape);
    }
  }
}

export {
  imgUploadForm,
  imgUploadPreview,
  imgUploadPreviewImg,
  imgUploadOverlay,
  imgUploadFormReset,
  scaleControlValue,
  scaleControlSmaller,
  scaleControlBigger,
  textHashtags,
  textDescription,
  effectLevelValue,
  effectLevelSlider,
  effectsRadio,
  onDocumentCloseByEscape
};

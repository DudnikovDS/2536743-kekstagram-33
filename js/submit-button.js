import {imgUploadForm} from './upload-form.js';

const imgUploadSubmitButton = imgUploadForm.querySelector('.img-upload__submit');

const BUTTON_TEXT = 'ОПУБЛИКОВАТЬ';
const BUTTON_TEXT_SEND = 'СОХРАНЯЮ';

const desableButton = () => {
  imgUploadSubmitButton.disabled = true;
  imgUploadSubmitButton.textContent = BUTTON_TEXT_SEND;
};

const enableButton = () => {
  imgUploadSubmitButton.disabled = false;
  imgUploadSubmitButton.textContent = BUTTON_TEXT;
};

export {desableButton, enableButton};

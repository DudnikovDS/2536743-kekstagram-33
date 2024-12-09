import {imgUploadForm, textDescription, textHashtags} from './upload-form.js';

// константы для валидации
const TEXT_DESCRIPTION_MAX_LENGTH = 140;
const HASHTAGS_COUNT = 5;

//параметры для Pristine
const pristineConfig = {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
};

//создание объекта pristine
const pristine = new Pristine (imgUploadForm, pristineConfig, false);

//функция проверки длины комментария
const checkTextDescription = (value) => {
  if (value !== '') {
    return value.length <= TEXT_DESCRIPTION_MAX_LENGTH;
  }
  return true;
};

pristine.addValidator(textDescription, checkTextDescription, 'Комментарий не должен превышать 140 символов');

//функция проверки формата хэштегов

const checkTextHashtagsFormat = (value) => {
  const hashtagsArray = value.toLowerCase().split(' ');
  const hashtagRegExp = /^#[a-zа-яё0-9]{1,19}$/i;
  if (value !== '') {
    for (let i = 0; i < hashtagsArray.length; i++) {
      if (hashtagRegExp.test(hashtagsArray[i]) === false) {
        return false;
      }
    }
    return true;
  }
  return true;
};


pristine.addValidator(textHashtags, checkTextHashtagsFormat,
  'Невалидный хэштег: 1. хэштег должен начинаться с символа # (решётка); 2. строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.; 3. хештег не может состоять только из одной решётки; 4.максимальная длина одного хэштега 20 символов, включая решётку; 5. хэштеги разделяются пробелами');

// функция проверки количества хэштегов

const checkTextHashtagsCount = (value) => {
  const hashtagsArray = value.toLowerCase().split(' ');
  return hashtagsArray.length <= HASHTAGS_COUNT;
};

pristine.addValidator(textHashtags, checkTextHashtagsCount,
  `Количество хэштегов не должно превышать ${HASHTAGS_COUNT}`);

//функция проверки наличия одинаковых хэштегов

const checkTextHashtagsSimilar = (value) => {
  const hashtagsArray = value.toLowerCase().split(' ');
  const hashtagsSet = new Set(hashtagsArray);
  return hashtagsArray.length === hashtagsSet.size;
};

pristine.addValidator(textHashtags, checkTextHashtagsSimilar,
  'Не допускаются одинаковые хэштеги');

//добавляем валидацию при попытке отправить форму
const onImgUploadFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    imgUploadForm.submit();
  }
};

imgUploadForm.addEventListener('submit', onImgUploadFormSubmit);

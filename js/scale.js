import {scaleControlValue, imgUploadPreviewImg, scaleControlSmaller, scaleControlBigger} from './upload-form.js';

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

let scaleControlValueNumber;

// функция по уменьшению масштаба
const onScaleControlSmallerClick = () => {
  scaleControlValueNumber = parseInt(scaleControlValue.value, 10);
  if (scaleControlBigger.disabled) {
    scaleControlBigger.disabled = false;
  }
  if (scaleControlValueNumber === SCALE_MIN) {
    scaleControlSmaller.disabled = true;
  } else {
    scaleControlValueNumber -= SCALE_STEP;
    scaleControlValue.value = `${scaleControlValueNumber}%`;
    imgUploadPreviewImg.style.transform = `scale(${scaleControlValueNumber / 100})`;
  }
};

scaleControlSmaller.addEventListener('click', onScaleControlSmallerClick);

// функция по увеличению масштаба
const onScaleControlBiggerClick = () => {
  scaleControlValueNumber = parseInt(scaleControlValue.value, 10);
  if (scaleControlSmaller.disabled) {
    scaleControlSmaller.disabled = false;
  }
  if (scaleControlValueNumber === SCALE_MAX) {
    scaleControlBigger.disabled = true;
  } else {
    scaleControlValueNumber += SCALE_STEP;
    scaleControlValue.value = `${scaleControlValueNumber}%`;
    imgUploadPreviewImg.style.transform = `scale(${scaleControlValueNumber / 100})`;
  }
};

scaleControlBigger.addEventListener('click', onScaleControlBiggerClick);

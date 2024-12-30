import {
  imgUploadForm,
  effectLevelValue,
  effectLevelSlider,
  imgUploadEffectLevel,
  effectsRadio,
  imgUploadPreviewImg
} from './upload-form.js';

import {effectsConfig} from './effects-config.js';

noUiSlider.create(effectLevelSlider, effectsConfig.effectNone);

//функция изменения слайдера
const onEffectLevelSliderUpdate = () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  const radioChecked = imgUploadForm.querySelector('.effects__radio:checked');
  switch (radioChecked.id) {
    case 'effect-chrome' :
      imgUploadPreviewImg.style.filter = `grayscale(${effectLevelSlider.noUiSlider.get()}`;
      break;
    case 'effect-sepia' :
      imgUploadPreviewImg.style.filter = `sepia(${effectLevelSlider.noUiSlider.get()}`;
      break;
    case 'effect-marvin' :
      imgUploadPreviewImg.style.filter = `invert(${effectLevelSlider.noUiSlider.get()}%`;
      break;
    case 'effect-phobos' :
      imgUploadPreviewImg.style.filter = `blur(${effectLevelSlider.noUiSlider.get()}px`;
      break;
    case 'effect-heat' :
      imgUploadPreviewImg.style.filter = `brightness(${effectLevelSlider.noUiSlider.get()}`;
      break;
  }
};

effectLevelSlider.noUiSlider.on('update', onEffectLevelSliderUpdate);

//функция по изменению параметров слайдера

const sliderConfigChange = (objectConfig, effect, unit = '') => {
  imgUploadEffectLevel.style.display = 'block';
  effectLevelSlider.noUiSlider.updateOptions(objectConfig);
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  imgUploadPreviewImg.style.filter = `${effect}(${effectLevelSlider.noUiSlider.get()}${unit})`;
};

//функция по смене параметров слайдера общая
const onEffectsRadioChange = (evt) => {
  const id = evt.target.id;

  switch (id) {
    case 'effect-none' :
      effectLevelSlider.noUiSlider.updateOptions(effectsConfig.effectNone);
      effectLevelValue.value = 0;
      imgUploadPreviewImg.style.filter = 'none';
      imgUploadEffectLevel.style.display = 'none';
      break;
    case 'effect-chrome' :
      sliderConfigChange(effectsConfig.effectChrome, 'grayscale');
      break;
    case 'effect-sepia' :
      sliderConfigChange(effectsConfig.effectSepia, 'sepia');
      break;
    case 'effect-marvin' :
      sliderConfigChange(effectsConfig.effectMarvin, 'invert', '%');
      break;
    case 'effect-phobos' :
      sliderConfigChange(effectsConfig.effectPhobos, 'blur', 'px');
      break;
    case 'effect-heat' :
      sliderConfigChange(effectsConfig.effectHeat, 'brightness');
      break;
  }
};

for (const effectsRadioItem of effectsRadio) {
  effectsRadioItem.addEventListener('change', onEffectsRadioChange);
}


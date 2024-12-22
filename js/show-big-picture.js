import {photoList} from './rendering-thumbnails.js';
import {photoSet} from './data.js';
import {socialComments, renderComments} from './rendering-comments';
import {closeModalWindow, body} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialCommentShownCount = bigPicture.querySelector('.social__comment-shown-count');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentsLoader = bigPicture.querySelector('.social__comments-loader');

const SOCIAL_COMMENT_SHOWN_COUNT = 5;

// обработчик клика на кнопку "закрыть" в виде крестика

function onBigPictureCloseButtonClick(evt) {
  evt.preventDefault();
  closeModalWindow(bigPicture, body, onDocumentCloseByEscape);
}

// вешаем обработчик на кнопку "закрыть" в виде крестика

bigPictureCloseButton.addEventListener('click', onBigPictureCloseButtonClick);

// обработчик при нажатии клавиши escape

function onDocumentCloseByEscape(evt) {
  if (evt.key === 'Escape') {
    closeModalWindow(bigPicture, body, onDocumentCloseByEscape);
  }
}

const onPhotoListShowBigPicture = (evt) => {
  const thumnnail = evt.target.closest('.picture');

  if (thumnnail) {
    const id = thumnnail.dataset.id;
    bigPicture.dataset.id = id; //для последующего использования при выводе следующих комментариев
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');

    bigPictureImg.src = photoSet[id].url;
    bigPictureImg.alt = photoSet[id].description;
    socialCaption.textContent = photoSet[id].description;
    likesCount.textContent = photoSet[id].likes;

    const socialCommentTotal = photoSet[id].comments.length;
    socialCommentTotalCount.textContent = socialCommentTotal;

    if (socialCommentTotal <= SOCIAL_COMMENT_SHOWN_COUNT) {
      socialCommentShownCount.textContent = socialCommentTotal;
      socialCommentsLoader.classList.add('hidden');
    } else {
      socialCommentShownCount.textContent = SOCIAL_COMMENT_SHOWN_COUNT;
      socialCommentsLoader.classList.remove('hidden');
    }

    socialComments.innerHTML = '';

    renderComments(id, photoSet, SOCIAL_COMMENT_SHOWN_COUNT, socialCommentTotal, SOCIAL_COMMENT_SHOWN_COUNT);

    document.addEventListener('keydown', onDocumentCloseByEscape);

  }
};

photoList.addEventListener('click', onPhotoListShowBigPicture);

// функция обработчик клика по кнопке загрузить ещё
const onSocialCommentsLoaderClick = () => {
  const id = bigPicture.dataset.id;
  let countShown = +socialCommentShownCount.textContent + SOCIAL_COMMENT_SHOWN_COUNT;
  const countTotal = +socialCommentTotalCount.textContent;

  if (countTotal <= countShown) {
    countShown = countTotal;
    socialCommentsLoader.classList.add('hidden');
    socialCommentShownCount.textContent = countTotal;
  } else {
    socialCommentShownCount.textContent = countShown;
  }

  renderComments(id, photoSet, countShown, countTotal, SOCIAL_COMMENT_SHOWN_COUNT);

};

socialCommentsLoader.addEventListener('click', onSocialCommentsLoaderClick);

export {photoSet, body};

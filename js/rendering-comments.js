const socialComment = document.querySelector('.social__comment');
const socialComments = document.querySelector('.social__comments');

// функция по загрузке дополнительных комментариев

const renderComments = (id, photoSet, countShown, countTotal, step) => {

  const fragmentDownloadComments = document.createDocumentFragment();
  const count = countTotal <= countShown ? countTotal : countShown;
  const countBegin = count % step === 0 ? count - 5 : Math.floor(count / step) * step;

  for (let i = countBegin; i < count; i++) {
    const commentItem = socialComment.cloneNode(true);
    const socialPicture = commentItem.querySelector('.social__picture');
    const socialText = commentItem.querySelector('.social__text');

    socialPicture.src = photoSet[id].comments[i].avatar;
    socialPicture.alt = photoSet[id].comments[i].name;
    socialText.textContent = photoSet[id].comments[i].message;

    fragmentDownloadComments.append(commentItem);
  }

  socialComments.append(fragmentDownloadComments);
};


export {socialComments, renderComments};

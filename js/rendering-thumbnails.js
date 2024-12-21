const templatePhoto = document.querySelector('#picture').content.querySelector('.picture');
const fragmentThumbnails = document.createDocumentFragment();
const photoList = document.querySelector('.pictures');

//функция генерации миниатюр
const renderThumbnails = (photosArray) => {
  try {
    if (photosArray) {
      photosArray.forEach(({id, url, likes, comments, description}) => {
        const newPhotoItem = templatePhoto.cloneNode(true);
        const pictureImg = newPhotoItem.querySelector('.picture__img');

        pictureImg.dataset.id = id;
        pictureImg.src = url;
        pictureImg.alt = description;
        newPhotoItem.dataset.id = id;
        newPhotoItem.querySelector('.picture__comments').textContent = comments.length;
        newPhotoItem.querySelector('.picture__likes').textContent = likes;
        fragmentThumbnails.append(newPhotoItem);
      });
      photoList.append(fragmentThumbnails);
    } else {
      throw new Error ('Данные не получены с сервера');
    }
  } catch(err) {
    return err;
  }
};

export {photoList, renderThumbnails};

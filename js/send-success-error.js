const body = document.querySelector('body');

const templateSuccessMessage = document.querySelector('#success').content.querySelector('.success');
const templateErrorMessage = document.querySelector('#error').content.querySelector('.error');

//успешная отправка формы
const showSuccessMessage = () => {
  const successMessage = templateSuccessMessage.cloneNode(true);
  const successButton = successMessage.querySelector('.success__button');

  const onSuccessButtonClick = () => {
    successMessage.remove();
    body.removeEventListener('click', onBodyClick);
    body.removeEventListener('keydown', onBodyCloseEsc);
  };
  successButton.addEventListener('click', onSuccessButtonClick);

  function onBodyClick (evt) {
    if (evt.target.classList.contains('success')) {
      successMessage.remove();
      body.removeEventListener('click', onBodyClick);
      body.removeEventListener('keydown', onBodyCloseEsc);
    }
  }
  body.addEventListener('click', onBodyClick);

  function onBodyCloseEsc(evt) {
    if (evt.key === 'Escape') {
      successMessage.remove();
      body.removeEventListener('click', onBodyClick);
      body.removeEventListener('keydown', onBodyCloseEsc);
    }
  }
  body.addEventListener('keydown', onBodyCloseEsc);

  body.append(successMessage);
};

// ошибка при отправке формы
const showErrorMessage = () => {
  const errorMessage = templateErrorMessage.cloneNode(true);
  const errorButton = errorMessage.querySelector('.error__button');

  const onErrorButtonClick = () => {
    errorMessage.remove();
    body.removeEventListener('click', onBodyClick);
    body.removeEventListener('keydown', onBodyCloseEsc);
  };
  errorButton.addEventListener('click', onErrorButtonClick);

  function onBodyClick (evt) {
    if (evt.target.classList.contains('error')) {
      errorMessage.remove();
      body.removeEventListener('click', onBodyClick);
      body.removeEventListener('keydown', onBodyCloseEsc);
    }
  }
  body.addEventListener('click', onBodyClick);

  function onBodyCloseEsc(evt) {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
      errorMessage.remove();
      body.removeEventListener('click', onBodyClick);
      body.removeEventListener('keydown', onBodyCloseEsc);
    }
  }
  body.addEventListener('keydown', onBodyCloseEsc);

  body.append(errorMessage);
};


export {showSuccessMessage, showErrorMessage};

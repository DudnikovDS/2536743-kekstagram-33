const body = document.querySelector('body');

//функция получения случайного целого числа

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// функция для создания счетчиков на основе замыкания
const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

// функция закрытия модального окна по нажатию на крестик

const closeModalWindow = (modalWindow,...rest) => {
  modalWindow.classList.add('hidden');
  rest[0].classList.remove('modal-open');
  document.removeEventListener('keydown', rest[1]);
};


// функция показа ошибки загрузки данных
const REMOVE_MESSAGE_TIMEOUT = 5000;
const templateErrorMsgLoadData = document.querySelector('#data-error').content.querySelector('.data-error');

const showErrorMessage = () => {
  const errorArea = templateErrorMsgLoadData.cloneNode(true);
  body.append(errorArea);

  setTimeout(() => {
    errorArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

export {
  body,
  closeModalWindow,
  createIdGenerator,
  getRandomInteger,
  showErrorMessage
};

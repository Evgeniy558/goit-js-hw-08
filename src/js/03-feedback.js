import { throttle } from 'lodash';
const emailEl = document.querySelector('[name=email]');
const textareaEl = document.querySelector('[name=message]');
const formEl = document.querySelector('.feedback-form');

const loadFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const feedbackFormState = {
  email: '',
  message: '',
};

formEl.addEventListener(
  'input',
  throttle(() => {
    feedbackFormState.email = emailEl.value;
    feedbackFormState.message = textareaEl.value;
    saveToLocalStorage('feedback-form-state', feedbackFormState);
  }, 2000)
);

formEl.addEventListener('submit', ev => {
  console.log(feedbackFormState);
  localStorage.clear();
  ev.preventDefault();
  formEl.reset();
});

const addInputData = () => {
  if (loadFromLocalStorage('feedback-form-state')) {
    emailEl.value = loadFromLocalStorage('feedback-form-state').email;
    textareaEl.value = loadFromLocalStorage('feedback-form-state').message;
  }
};
addInputData();

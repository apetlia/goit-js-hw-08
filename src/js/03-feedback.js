import { getDataFromLocalStorage } from './function';
import { isEmpty, throttle } from 'lodash';

LOCAL_STORAGE_KEY = 'feedback-form-state';

const feedbackFormfRef = document.querySelector('.feedback-form');

feedbackFormfRef.addEventListener('input', throttle(onFormInput, 500));
feedbackFormfRef.addEventListener('submit', onFormSubmit);

initForm();

function onFormInput(evt) {
  const formData = getDataFromLocalStorage(LOCAL_STORAGE_KEY);

  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  feedbackFormfRef.reset();
  const formData = getDataFromLocalStorage(LOCAL_STORAGE_KEY);

  console.log(formData);

  localStorage.clear(LOCAL_STORAGE_KEY);
}

function initForm() {
  const savedFormData = getDataFromLocalStorage(LOCAL_STORAGE_KEY);

  if (!isEmpty(savedFormData)) {
    Object.entries(savedFormData).forEach(([key, value]) => {
      feedbackFormfRef.elements[key].value = value;
    });
  }
}

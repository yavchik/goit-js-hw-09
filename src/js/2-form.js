const formEl = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

formEl.addEventListener('input', () => {
  const data = new FormData(formEl);
  formData.email = data.get('email').trim();
  formData.message = data.get('message').trim();
  saveToLS('feedback-form-state', formData);
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS('feedback-form-state');
  formEl.elements.email.value = data?.email || '';
  formEl.elements.message.value = data?.message || '';
});

formEl.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  formEl.reset();
  formData.email = '';
  formData.message = '';
  localStorage.removeItem('feedback-form-state');
});

const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.name');

function getTimeOfDay() {
  let time = new Date().getHours();
  return time < 5.59
    ? 'Добрый вечер' : time < 11.59
    ? 'Доброе утро' : time < 17.59
    ? 'Добрый день' : 'Доброй ночи';
}

function showGreeting() {
  let timeOfDay = getTimeOfDay();
  greeting.textContent = `${timeOfDay},`;
  setTimeout(showGreeting, 1000);
}

function setLocalStorage() {
  // setItem(key, value) – сохранить пару ключ/значение.
  sessionStorage.setItem('name'.userName);
}

function getLocalStorage() {
  if (sessionStorage.getItem('name')) {
    // getItem(key) – получить данные по ключу key.
    userName = sessionStorage.getItem('name');
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
showGreeting();

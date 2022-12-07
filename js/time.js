const clock = document.querySelector('.time');
const calendar = document.querySelector('.date');

function showTime() {
    let currentDatetime = new Date();
    // Возвращает временную часть объекта Date в виде строки с
    // использованием соглашений локали (местности где вы находитесь)
    let currentTime = currentDatetime.toLocaleTimeString();
    // Свойство: .textContext - хранит в себе текстовое содержимое элемента.
    clock.textContent = currentTime;

    showDate()
    setTimeout(showTime, 1000)
};

function showDate() {
    let currentDatetime = new Date();
    let options = {
        // https://learn.javascript.ru/intl
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };
    let currentDate = currentDatetime.toLocaleDateString(['ru-RU', 'en-US'], options);
    // en-US => В американском английском используется порядок месяц-день-год
    calendar.textContent = currentDate;
};

showTime();
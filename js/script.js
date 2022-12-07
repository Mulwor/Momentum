const clock = document.querySelector('.time');

function showTime() {
    let currentDatetime = new Date();
    // Возвращает временную часть объекта Date в виде строки с
    // использованием соглашений локали (местности где вы находитесь)
    let currentTime = currentDatetime.toLocaleTimeString();
    // Свойство: .textContext - хранит в себе текстовое содержимое элемента.
    clock.textContent = currentTime;
    setTimeout(showTime, 1000)
};

showTime();
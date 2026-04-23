// Поточний час у шапці сторінки

import { refs } from './js/refs';

// Контекст:
// У шапці сайту потрібно постійно показувати актуальний час без перезавантаження сторінки.

// Базовий HTML:

// <header class="page-header">
//   <p class="current-time" aria-live="polite">00:00:00</p>
// </header>

// Розширене ТЗ:
// · Створи функцію, яка отримує поточний час через new Date().
// · У .current-time потрібно виводити години, хвилини та секунди у форматі HH:MM:SS.
// · Час має оновлюватися щосекунди через setInterval.
// · Початкове значення потрібно відмалювати одразу після завантаження сторінки, не чекаючи першої секунди.
// · Для чисел з однією цифрою потрібно додавати нуль на початок.

const getCurrentTime = () => {
  const currentDate = new Date();
  const Hours = currentDate.getHours();
  const minut = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  return `${addLeadingZero(Hours)} : ${addLeadingZero(minut)} : ${addLeadingZero(second)}`;
};
const updateClock = () => {
  refs.currentTime.textContent = getCurrentTime();
};
updateClock();
setInterval(() => updateClock(), 1000);
function addLeadingZero(time) {
  return String(time).padStart(2, '0');
}

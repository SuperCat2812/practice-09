// 3. Запам’ятовування улюбленого кольору
// Контекст: На сторінці профілю є випадаючий список з кольорами. Користувач хоче, щоб після повторного відкриття сайту залишався його попередній вибір.
// Базовий HTML:
// <section class="task color-task">
//   <h2>Favorite color</h2>
//   <select class="color-select">
//     <option value="blue">Blue</option>
//     <option value="green">Green</option>
//     <option value="purple">Purple</option>
//   </select>
//   <p class="color-status">Обраний колір: blue</p>
// </section>;
// Розширене ТЗ:
//     • При зміні значення в .color-select потрібно зберігати вибраний колір у localStorage.+
//     • Збереження та зчитування потрібно реалізувати через JSON.+
//     • У .color-status потрібно відображати актуальний вибір користувача.+
//     • Після оновлення сторінки select має показувати збережене значення.+
//     • Якщо даних ще немає, за замовчуванням має використовуватися blue.

import { initTaskColorPages, onColorSelectChange } from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', initTaskColorPages);
refs.colorSelect.addEventListener('change', onColorSelectChange);

// document.addEventListener('DOMContentLoaded', event => {
//   refs.colorStatus.textContent = getFromLocalStorage(STORAGE_KEYS.COLOR_STATUS) || `Обраний колір: blue`;
//   refs.colorSelect.value = getFromLocalStorage(STORAGE_KEYS.COLOR_SELECT) || `blue`;
// });

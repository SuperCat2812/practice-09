// 1. Привітання користувача після повернення на сайт
// Контекст: На стартовій сторінці є поле для імені. Користувач хоче, щоб сайт запам’ятовував його ім’я і показував персональне привітання після оновлення сторінки.
// Базовий HTML:
// <section class="task welcome-task">
//   <h2>Welcome</h2>
//   <input class="user-name" type="text" placeholder="Ваше ім’я" />
//   <p class="welcome-message">Привіт, гість!</p>
// </section>
// Розширене ТЗ:
//     • Для збереження і зчитування потрібно використати JSON.stringify і JSON.parse.
//     • Якщо ім’я ще не введене, має показуватися повідомлення «Привіт, гість!».
//     • У .welcome-message потрібно показувати текст із поточним ім’ям користувача.
//     • Після перезавантаження сторінки поле має відновлювати збережене значення.
//     • Під час введення в .user-name потрібно зберігати ім’я в localStorage.

import { initWelcomeTaskPager, onNameInput } from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', initWelcomeTaskPager);

refs.nameUser.addEventListener('input', onNameInput);

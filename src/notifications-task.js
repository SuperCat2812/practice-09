// 7. Перемикач показу сповіщень
// Контекст: У налаштуваннях акаунта є чекбокс, який вмикає або вимикає сповіщення. Потрібно, щоб стан чекбокса зберігався між відкриттями сторінки.
// Базовий HTML:
/* <section class="task notifications-task">
  <h2>Notifications</h2>
  <label>
    <input class="notifications-toggle" type="checkbox" />
    Увімкнути сповіщення
  </label>
  <p class="notifications-status">Сповіщення вимкнені</p>
</section>; */
// Розширене ТЗ:
//     • При зміні стану .notifications-toggle потрібно зберігати boolean-значення в localStorage+
//     • Дані потрібно зберігати й читати через JSON.+
//     • Якщо значення ще не збережене, чекбокс має бути неактивним.+
//     • У .notifications-status потрібно показувати, увімкнені сповіщення чи ні.+
//     • Після оновлення сторінки чекбокс має відновлювати попередній стан.+

import { initNotifivationsPage, onNotificationsToggleChange } from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', initNotifivationsPage);
refs.notificationsToggle.addEventListener('change', onNotificationsToggleChange);

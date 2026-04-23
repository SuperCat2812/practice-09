import { STORAGE_KEY } from './constants';
import { dataSaver } from './dataSaver';
import { refs } from './refs';
import { getFromLocalStorage, removeLocalStorage, saveToLocalStorage } from './storage';

// export function onNameInput() {
//   const name = refs.nameUser.value.trim();
//   if (refs.nameUser.value !== '') {
//     dataSaver.name = name;
//     localStorage.setItem('name', dataSaver.name);
//     refs.message.textContent = `Привіт, ${name}`;
//   } else {
//     refs.message.textContent = 'Привіт, гість!';
//     localStorage.removeItem('name');
//   }
// }
// export function onNameInput(event) {
//   const name = event.target.value.trim();
//   if (event.target.value !== '') {
//     dataSaver.name = name;
//     localStorage.setItem(STORAGE_KEY.USER_NAME, JSON.stringify(dataSaver.name));
//     refs.message.textContent = `Привіт, ${name}`;
//   } else {
//     refs.message.textContent = 'Привіт, гість!';
//     localStorage.removeItem(STORAGE_KEY.USER_NAME);
//   }
// }
export function onNameInput(event) {
  const name = event.target.value.trim();

  dataSaver.name = name;
  localStorage.setItem(STORAGE_KEY.USER_NAME, JSON.stringify(dataSaver.name));
  refs.message.textContent = `Привіт, ${name}`;
  if (event.target.value === '') {
    refs.message.textContent = 'Привіт, гість!';
  }
}

export function initWelcomeTaskPager(event) {
  try {
    const dataSaverLocal = JSON.parse(localStorage.getItem(STORAGE_KEY.USER_NAME));

    dataSaver.name = dataSaverLocal;
    refs.nameUser.value = dataSaverLocal;

    refs.message.textContent = dataSaverLocal ? `Привіт,${refs.nameUser.value}` : `Привіт, гість!`;
  } catch (error) {
    console.log(error);
  }
}

export function onColorSelectChange(event) {
  const color = event.target.value;
  saveToLocalStorage(STORAGE_KEY.USER_COLOR, color);
  refs.colorStatus.textContent = `Обраний колір: ${color}`;
}

export function initTaskColorPages() {
  const data = getFromLocalStorage(STORAGE_KEY.USER_COLOR);
  if (data) {
    refs.colorStatus.textContent = `Обраний колір: ${data}`;
    refs.colorSelect.value = data;
  }
}

export function onNotificationsToggleChange(event) {
  const checked = event.target.checked;
  saveToLocalStorage(STORAGE_KEY.USER_CHECKER, checked);
  refs.notificationsStatus.textContent = checked ? `Cповіщення увімкнені` : `Сповіщення вимкнені`;
}

export function initNotifivationsPage() {
  const status = getFromLocalStorage(STORAGE_KEY.USER_CHECKER);
  if (status) {
    refs.notificationsStatus.textContent = 'Cповіщення увімкнені';
    refs.notificationsToggle.checked = status;
  }
}

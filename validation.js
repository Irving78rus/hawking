const sendBtn = document.querySelector('.val');
const resultsContainer3 = document.querySelector(".js-results");
const input = document.querySelector('#input');

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    try {
      if (input.value === '') {
        throw new Error('Пустая значение. Введите значение');
      } else if (!Number.isInteger(+input.value)) {
        throw new Error('Это строка! Введите цифру.');
      } else if (input.value < 5) {
        throw new Error('Значение меньше 5');
      } else if (input.value > 10) {
        throw new Error('Значение больше 10');
      } else {
        answer.innerHTML = input.value;
      }
    } catch (err) {
        resultsContainer3.innerHTML = `Ошибка! ${err}`;
    }
  });
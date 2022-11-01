const loadBtn2 = document.querySelector('.js-load');
const resultsContainer2 = document.querySelector('.js-results');
const searchInput = document.querySelector('.js-input');

loadBtn2.addEventListener('click', (e) => {
  e.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();

  fetch(`https://api.github.com/users/${searchValue}`)
    .then((data) => data.json())
    .then(
      (data) =>
        (resultsContainer2.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
    );
});
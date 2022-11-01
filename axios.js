const loadBtn = document.querySelector(".post");
const resultsContainer = document.querySelector(".js-results");
loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data)
    .then((res) =>
      res.map(
        (post) =>
          (resultsContainer.innerHTML += `<div className="response-container">
 
  <p> Имя: <span>${post.name}</span></p><p> city: <span>${post.address.city}</span></p><p>
  </p><p> email: <span>${post.email}</span></p><p>
</p><br></div>`)
      )
    );
});

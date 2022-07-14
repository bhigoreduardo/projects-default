window.addEventListener("scroll", () => {
  document.getElementById("header").classList.toggle("sticky-header", scrollY > 200);
});

const URL = "http://192.168.0.124:5000";

function searchMovie() {
  return new Promise((resolve, reject) => {
    let target = document.getElementById("target").value;

    fetch(`${URL}/api/movie?target=${target}`)
      .then((response) => {
        return response.text();
      })
      .then((json) => {
        sessionStorage.setItem("movie", json);
        resolve({ message: "Request Success" });
      })
      .catch((err) => {
        if (err) reject({ message: "Requrest Error" });
      });
  });
}

function redirectSearch() {
  searchMovie().then(redirect);
}

function redirect() {
  location.href = URL + "/filme";
}

function refreshSearch() {
  searchMovie().then(refreshData);
}

function refreshData() {
  let movieJson = sessionStorage.getItem("movie");
  let movie = JSON.parse(movieJson)[0];

  let card = `
    <div class="card-front">
      <h1>${movie.name}</h1>
      <p><span>Categoria:</span> ${movie.category}</p>
      <p><span>Ano:</span> ${movie.year}</p>
      <p><span>Duração:</span> ${movie.time}</p>
      <i>i</i>
      <span class="arrow"><img src="./assets/img/Intersect.svg" alt="Seta" /></span>
    </div>

    <div class="card-back"></div>
  `;

  let description = `
  <article class="movie-description">
    <div class="wrapper-image">
      <img class="cover" src="./assets/img/${movie.cover}" alt="${movie.name}" />
      <span style="background-image: url(./assets/img/Vector.svg)"></span>
    </div>

    <div class="description-content">
      <div class="headline">
        <p><span>${movie.name[0]}</span>${movie.name.substring(1)}</p>
        <span class="label">${movie.condition}</span>
      </div>

      <h2>
        <span><img src="./assets/img/lighting.svg" alt="Ícone" /></span>${movie.director}
      </h2>

      <p class="text">${movie.description}</p>

      <small>${movie.award}</small>
    </div>
  </article>
  `;

  document.getElementById("card").innerHTML = card;
  document.getElementById("description").innerHTML = description;
}

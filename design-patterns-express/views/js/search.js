let URL = "http://192.168.0.124:5000";

function showInformation(data) {
  let container = `
            <h1>Pesquisa</h1>
            <article>
              <p>id:<small>${data.id}</small></p>
              <p>chave:<small>${data.chave}</small></p>
              <p>data:<small>${data.date}</small></p>
              <p>Alvo da pesquisa:<small class="target">${data.chave}</small></p>
            </article>
            `;

  document.getElementById("result-search").innerHTML = container;
}

/* Request: all */
function searchAll() {
  fetch(URL + "/api/all")
    .then((res) => {
      return res.text();
    })
    .then((json) => {
      let elements = JSON.parse(json);
      let container = "";

      elements.forEach((e) => {
        let element = `
            <article>
              <p>id:<small>${e.id}</small></p>
              <p>chave:<small>${e.chave}</small></p>
              <p>data:<small>${e.date}</small></p>
            </article>
        `;
        container += element;
      });

      document.getElementById("result-search").innerHTML = `<h1>Pesquisa</h1>`;
      document.getElementById("result-search").innerHTML += container;
    })
    .catch((err) => {
      if (err) throw err;
    });
}

/* Request: params */
function searchParams() {
  let target = document.getElementById("target-params").value;

  fetch(`${URL}/api/${target}`)
    .then((res) => {
      return res.text();
    })
    .then((json) => {
      showInformation(JSON.parse(json)[0]);
    })
    .catch((err) => {
      if (err) throw err;
    });
}

/* Request: query part */
function searchQuery() {
  let target = document.getElementById("target-query").value;

  fetch(`${URL}/api?key=${target}`)
    .then((res) => {
      return res.text();
    })
    .then((json) => {
      showInformation(JSON.parse(json)[0]);
    })
    .catch((err) => {
      if (err) throw err;
    });
}

/* Request: JSON */
function searchJSON() {
  let target = document.getElementById("target-json").value;

  const options = {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({ key: target }),
  };

  fetch(`${URL}/api`, options)
    .then((res) => {
      return res.text();
    })
    .then((json) => {
      showInformation(JSON.parse(json)[0]);
    })
    .catch((err) => {
      if (err) throw err;
    });
}

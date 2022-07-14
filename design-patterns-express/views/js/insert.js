function insertInformation(id, value, data) {
  let container = `
            <h1>Inserir</h1>
            <article>
              <p>id:<small class="target">${id}</small></p>
              <p>chave:<small class="target">${value}</small></p>
              <h6>${data.message}</h6>
            </article>
            `;

  document.getElementById("result-insert").innerHTML = container;
}

/* Request: params */
function insertParams() {
  let id = document.getElementById("id-params").value,
    value = document.getElementById("value-params").value;

  fetch(`${URL}/api/new/${id}&${value}`)
    .then((res) => {
      return res.text();
    })
    .then((json) => {
      insertInformation(id, value, JSON.parse(json));
    })
    .catch((err) => {
      if (err) throw err;
    });
}

/* Request: query part */
function insertQuery() {
  let id = document.getElementById("id-query").value,
    value = document.getElementById("value-query").value;

  fetch(`${URL}/api/new?id=${id}&value=${value}`)
    .then((res) => {
      return res.text();
    })
    .then((json) => {
      insertInformation(id, value, JSON.parse(json));
    })
    .catch((err) => {
      if (err) throw err;
    });
}

/* Request: JSON */
function insertJSON() {
  let id = document.getElementById("id-json").value,
    value = document.getElementById("value-json").value;

  const options = {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({ id, value }),
  };

  fetch(`${URL}/api/new`, options)
    .then((res) => {
      return res.text();
    })
    .then((json) => {
      insertInformation(id, value, JSON.parse(json));
    })
    .catch((err) => {
      if (err) throw err;
    });
}

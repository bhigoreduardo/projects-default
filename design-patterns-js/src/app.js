// Import route logics
import Utils from "./service/Utils";

// Import views
import Home from "./views/home";

// Routes
let routes = {
  "/": Home,
};

// Manipulation router
let router = async () => {
  const app = document.getElementById("app");
  let request = Utils.parseRequestURL();

  let parseURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" + request.id : "") +
    (request.verb ? "/" + request.verb : "");
  let page = routes[parseURL] ? routes[parseURL] : Error;

  app.innerHTML = await page.render();
  await page.after_render();
};

// Listen router
window.addEventListener("hashchange", router);

// Loader router
window.addEventListener("load", router);

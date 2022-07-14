let iconMenu = document.getElementById("icon-menu");
let navbar = document.getElementById("navbar");
let header = document.getElementById("header");

iconMenu.onclick = () => {
  iconMenu.classList.toggle("fa-bars");
  iconMenu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  header.classList.toggle("active", scrollY > 0);
};

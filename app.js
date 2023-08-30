let home = document.querySelectorAll("ul li a")[0];
let about = document.querySelectorAll("ul li a")[1];
let menu = document.querySelectorAll("ul li a")[2];
let contact = document.querySelectorAll("ul li a")[3];
let explore = document.querySelector("#home-btn");

home.addEventListener("click", () => {
  document.title = "Foods | Home";
});
about.addEventListener("click", () => {
  document.title = "Foods | About";
});
menu.addEventListener("click", () => {
  document.title = "Foods | Menu";
});
contact.addEventListener("click", () => {
  document.title = "Foods | Contact";
});
explore.addEventListener("click", () => {
  let hero = document.querySelectorAll(".hero")[0];
  hero.innerHTML = `
  <img src="img/about.png" alt="" />
  `;
  let home_title = document.querySelector(".title");
  home_title.innerHTML = `
  <h1>
          Try <br />
          <span>Our Today's Special</span>
        </h1>
  `;
  let about_hero = document.querySelectorAll(".hero")[1];
  about_hero.innerHTML = `
  <img src="img/home.png" alt="" />
  `;
});

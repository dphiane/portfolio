import sal from "sal.js";
const toggleBtn = document.getElementsByClassName("burger")[0];
const navBar = document.getElementsByClassName("nav_links")[0];

toggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
sal();
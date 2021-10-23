//navbar
let openDropDown = () => {
  document.getElementById("myDropdown").classList.toggle("show");
};

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("navbar-container-bottom");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("show");
});

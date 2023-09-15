document
  .querySelector(".header-dropdown")
  .addEventListener("mouseenter", function () {
    console.log("shaad");
    document.querySelector(".header-dropdown-menu").classList.add("show");
  });

document
  .querySelector(".header-dropdown")
  .addEventListener("mouseleave", function () {
    document.querySelector(".header-dropdown-menu").classList.remove("show");
  });
console.log("first");

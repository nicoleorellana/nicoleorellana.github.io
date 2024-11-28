document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const categories = document.querySelector(".categories");
  
    menuIcon.addEventListener("click", function () {
      categories.style.display = categories.style.display === "none" || categories.style.display === "" ? "flex" : "none";
    });
  });
 
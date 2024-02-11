// script.js

document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const mySidebar = document.getElementById("mySidebar");
  
    sidebarToggle.addEventListener("click", function () {
      mySidebar.classList.toggle("show-sidebar");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const frontImage = document.querySelector(".front_image");
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
  
    frontImage.addEventListener("mouseover", function () {
        image1.style.display = "none";
        image2.style.display = "block";
    });
  
    frontImage.addEventListener("mouseout", function () {
        image1.style.display = "block";
        image2.style.display = "none";
    });
});
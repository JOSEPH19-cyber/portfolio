const hamburger = document.querySelector(".hamburger-icon");
const listNav = document.querySelector(".nav-list");
const barnav = document.querySelector(".navbar");
const header = document.querySelector(".header-container");
hamburger.addEventListener("click", afficherMenu);
function afficherMenu(){
    listNav.classList.toggle("show");
    barnav.classList.toggle("show");
    header.classList.toggle("show");
} 
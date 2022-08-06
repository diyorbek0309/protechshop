let mas = document.getElementsByClassName("laptop_teyi");
let rang = document.querySelectorAll(".buy a");
let body_style = document.getElementById("xd");
let a = true;
function laptop_teyi1(a) {
  mas[a - 1].style.display = "flex";
  rang[a - 1].style.backgroundColor = "#067ad4";
}

function laptop_teyi2(a) {
  mas[a - 1].style.display = "none";
  rang[a - 1].style.backgroundColor = "#aaa";
}

function func_nav() {
  document.getElementById("clic_nav").classList.toggle("active");
  body_style.classList.toggle("active");
  if (a) {
    body_style.style.overflow = "hidden";
    a = false;
    header.style.position = "static";
  } else {
    body_style.style.overflow = "scroll";
    a = true;
    header.style.position = "fixed";
  }
  document.getElementsByClassName("fa-bars")[0].classList.toggle("fa-xmark");
  document.getElementsByClassName("tuman")[0].classList.toggle("active");
}

function ortga() {
  document.getElementById("clic_nav").classList.toggle("active");
  body_style.classList.toggle("active");
  body_style.style.overflow = "scroll";
  a = true;
  header.style.position = "fixed";
  document.getElementsByClassName("fa-bars")[0].classList.toggle("fa-xmark");
  document.getElementsByClassName("tuman")[0].classList.toggle("active");
}

let saver = false;
function toggleDropdown() {
  let dropdowns = document.getElementsByClassName("hidden_dropdown");
  let dropdown = document.getElementsByClassName("dropdown");
  document
    .getElementsByClassName("fa-chevron-down")[0]
    .classList.toggle("fa-chevron-up");
    
  if (saver) {
    dropdowns[0].style.display = "none";
    saver = false;  
  } else {
    saver = true;
    dropdowns[0].style.display = "block";
  }
}

function toggleDropdown() {
  let dropdowns = document.getElementsByClassName("hidden_dropdown");
  let dropdown = document.getElementsByClassName("dropdown");
  document
    .getElementsByClassName("fa-chevron-down")[0]
    .classList.toggle("fa-chevron-up");
    
  if (saver) {
    dropdowns[0].style.display = "none";
    saver = false;  
  } else {
    saver = true;
    dropdowns[0].style.display = "block";
  }
}

let header = document.getElementsByClassName("header_bottom")[0];
document.onscroll = function () {
  if (window.scrollY > 100) {
    header.style.position = "fixed";
    header.style.top = 0;
    header.style.backgroundColor = "#fff";
    header.style.zIndex = 22;
    header.style.width = "89%";
  } else {
    header.style.position = "static";
  }
};

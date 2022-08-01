let mas = document.getElementsByClassName("laptop_teyi");
let rang = document.querySelectorAll('.buy a');
let body_style = document.getElementById("xd");
let a = true;
function laptop_teyi1(a){
    mas[a-1].style.display = "flex";
    rang[a-1].style.backgroundColor = "#067ad4"
}

function laptop_teyi2(a){
    mas[a-1].style.display = "none";
    rang[a-1].style.backgroundColor = "#aaa";
}

function func_nav() {
    document.getElementById("clic_nav").classList.toggle('active');
    body_style.classList.toggle('active');
    if (a){
    body_style.style.overflow = "hidden";
    a = false;
    }
    else {
    body_style.style.overflow = "scroll";
    a = true;
    }
    document.getElementsByClassName("fa-bars")[0].classList.toggle('fa-xmark');
    document.getElementsByClassName("tuman")[0].classList.toggle('active');
}
function ortga() {
    document.getElementById("clic_nav").classList.toggle('active');
    body_style.classList.toggle('active');
    body_style.style.overflow = "scroll";
    a = true;
    document.getElementsByClassName("fa-bars")[0].classList.toggle('fa-xmark');
    document.getElementsByClassName("tuman")[0].classList.toggle('active');
}

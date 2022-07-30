let mas = document.getElementsByClassName("laptop_teyi");
let rang = document.querySelectorAll('.buy a');

function laptop_teyi1(a){
    mas[a-1].style.display = "flex";
    rang[a-1].style.backgroundColor = "#067ad4"
}

function laptop_teyi2(a){
    mas[a-1].style.display = "none";
    rang[a-1].style.backgroundColor = "#aaa";
}


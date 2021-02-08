let menuBtn = document.querySelector('.menu-icon');
let menuL = document.querySelector('.menu');

menuBtn.onclick = function (){
    if (menuL.classList.contains('hide')){
        menuL.style.transform = "translateX(30vh)";
    } else {
        menuL.style.transform = "translateX(-30vh)";
    }
    menuL.classList.toggle('hide');
};
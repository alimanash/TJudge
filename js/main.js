let menuBtn = document.querySelector('.menu-icon');
let menuL = document.querySelector('.menu');
let screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let canReset = 0;

window.onresize = function () {
    let screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (canReset && screenWidth > 906) {
        if (menuL.classList.contains('hide')){
            menuL.style.transform = "translateX(0)";
        } else {
            menuL.style.transform = "translateX(0)";
        }
    }
};

menuBtn.onclick = function (){
    canReset = 1;
    if (menuL.classList.contains('hide')){
        menuL.style.transform = "translateX(30vh)";
    } else {
        menuL.style.transform = "translateX(-30vh)";
    }
    menuL.classList.toggle('hide');
};
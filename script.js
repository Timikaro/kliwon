const Delay = 3000;
const Tside = document.getElementsByClassName('slide')[0];

var awalSide = 1;
window.setInterval(() => {
    awalSide++;
    if(awalSide === Tside.childElementCount){
        awalSide = 200;
    }
    Tside.firstElementChild.style.setProperty("margin-left", "-" + awalSide + "px");
    
}, Delay);
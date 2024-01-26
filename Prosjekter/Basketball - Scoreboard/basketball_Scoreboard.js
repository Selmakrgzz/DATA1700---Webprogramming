let homeNUM = document.getElementById("homeNum")
let guestNUM = document.getElementById("guestNum")
let result = 0;

homeNUM.textContent = result;
guestNUM.textContent = result;

function homeAdd1(){
    result++;
    homeNUM.textContent = result;
}

function homeAdd2(){
    result+=2;
    homeNUM.textContent = result;
}

function homeAdd3(){
    result+=3;
    homeNUM.textContent = result;
}

function guestAdd1(){
    result++;
    guestNUM.textContent = result;
}

function guestAdd2(){
    result+=2;
    guestNUM.textContent = result;
}

function guestAdd3(){
    result+=3;
    guestNUM.textContent = result;
}
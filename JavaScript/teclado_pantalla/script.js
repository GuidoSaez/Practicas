var array1 = ["q","w","e","r","t","y","u","i","o","p"];
var array2 = ["a","s","d","f","g","h","j","k","l","ñ"];
var array3 = ["z","x","c","v","b","n","m"];

for(i = 0; i < array1.length; i++) {
    document.write('<input type="button" value="'+ array1[i] +'" onclick="agregarAPantalla(this.value)">');
}

document.write('<br>');

for(i = 0; i < array2.length; i++) {
    document.write('<input type="button" value="'+ array2[i] +'" onclick="agregarAPantalla(this.value)">');
}

document.write('<br>');

for(i = 0; i < array3.length; i++) {
    document.write('<input type="button" value="'+ array3[i] +'" onclick="agregarAPantalla(this.value)">');
}

document.write('<br>');

document.write('<input type="button" value="Borrar" onclick="borrar()">');
document.write('<input type="button" value="Espacio" onclick="espacio()">');
document.write('<input type="button" value="Backspace" onclick="backspace()">');

function agregarAPantalla(valor) {
    document.getElementById('display').value += valor;
}

function borrar() {
    document.getElementById('display').value = "";
}

function espacio() {
    document.getElementById('display').value += " ";
}

function backspace() {
    let a = document.getElementById('display').value;
    let b = a.slice(0, -1);
    document.getElementById('display').value = b;
}



var numero1 = 0;
var numero2 = 0;
var operador = "";

function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

function borrar() {
  document.getElementById("pantalla").value = "";
}

function operar(signo) {
  numero1 = parseInt(document.getElementById("pantalla").value);
  operador = signo;
  document.getElementById("pantalla").value = "";
}

function resultado() {
  numero2 = parseInt(document.getElementById("pantalla").value);

  document.getElementById("pantalla").value = "";

  var r = 0;

  switch (operador) {
    case "+":
      r = numero1 + numero2;
      break;
    case "-":
      r = numero1 - numero2;
      break;
    case "*":
      r = numero1 * numero2;
      break;
    case "/":
      r = numero1 / numero2;
      break;
    default:
  }

  document.getElementById("pantalla").value = r;
}

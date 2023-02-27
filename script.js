/* Pantalla */
let pantalla = document.getElementById("mostrador");
/* Números */
let num1 = document.getElementById("1");
let num2 = document.getElementById("2");
let num3 = document.getElementById("3");
let num4 = document.getElementById("4");
let num5 = document.getElementById("5");
let num6 = document.getElementById("6");
let num7 = document.getElementById("7");
let num8 = document.getElementById("8");
let num9 = document.getElementById("9");
let num0 = document.getElementById("0");
/* Operadores */
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let igual = document.getElementById("igual");

let ce = document.getElementById("ce");

let primer_valor = 0;
let segundo_valor = 0;
let operacion = undefined;

pantalla.innerHTML = primer_valor;
/* Funciones operadores */
suma.onclick = () => {
  operacion = "+";
  segundo_valor = primer_valor;
  primer_valor = 0;
};
resta.onclick = () => {
  operacion = "-";
  segundo_valor = primer_valor;
  primer_valor = 0;
};
multiplicacion.onclick = () => {
  operacion = "*";
  segundo_valor = primer_valor;
  primer_valor = 0;
};
division.onclick = () => {
  operacion = "/";
  segundo_valor = primer_valor;
  primer_valor = 0;
};
igual.onclick = () => {
  switch (operacion) {
    case "+":
      pantalla.innerHTML = primer_valor + segundo_valor;
      primer_valor = primer_valor + segundo_valor;
      segundo_valor = 0;
      break;
    case "-":
      pantalla.innerHTML = segundo_valor - primer_valor;
      primer_valor = segundo_valor - primer_valor;
      segundo_valor = 0;
      break;
    case "*":
      pantalla.innerHTML = primer_valor * segundo_valor;
      primer_valor = primer_valor * segundo_valor;
      segundo_valor = 0;
      break;
    case "/":
      pantalla.innerHTML = segundo_valor / primer_valor;
      primer_valor = segundo_valor / primer_valor;
      segundo_valor = 0;
      break;
  }
};

ce.onclick = () => {
  primer_valor = 0;
  segundo_valor = 0;
  operacion = "";
  pantalla.innerHTML = primer_valor;
};

/* Funciones números */
num1.onclick = () => {
  primer_valor += "1";
  primer_valor = parseInt(primer_valor);
  pantalla.innerHTML = primer_valor;
};
num2.onclick = () => {
  primer_valor += "2";
  primer_valor = parseInt(primer_valor);
  pantalla.innerHTML = primer_valor;
};
num3.onclick = () => {
  primer_valor += "3";
  primer_valor = parseInt(primer_valor);
  pantalla.innerHTML = primer_valor;
};
num4.onclick = () => {
  primer_valor += "4";
  primer_valor = parseInt(primer_valor);
  pantalla.innerHTML = primer_valor;
};
num5.onclick = () => {
  primer_valor += "5";
  primer_valor = parseInt(primer_valor);
  pantalla.innerHTML = primer_valor;
};
num6.onclick = () => {
  primer_valor += "6";
  primer_valor = parseInt(primer_valor);
  pantalla.innerHTML = primer_valor;
};
num7.onclick = () => {
  primer_valor += "7";
  primer_valor = parseInt(primer_valor);
  pantalla.innerHTML = primer_valor;
};
num8.onclick = () => {
  primer_valor += "8";
  primer_valor = parseInt(primer_valor);
  pantalla.innerHTML = primer_valor;
};
num9.onclick = () => {
  primer_valor += "9";
  primer_valor = parseInt(primer_valor);
  pantalla.innerHTML = primer_valor;
};
num0.onclick = () => {
  primer_valor += "0";
  primer_valor = parseInt(primer_valor);
  pantalla.innerHTML = primer_valor;
};

//Menú operaciones matemáticas
let option;
let num1;
let num2;
let result;

alert("Que tipo de operacion desea?");
option = Number(prompt(
  "1. Suma \n2. Resta \n3. Multiplicacion \n4. Division \n0. Salir",
));

num1 = Number(prompt("Ingrese el primer numero"));
num2 = Number(prompt("Ingrese el segundo numero"));

if (typeof num1 == "number" && typeof num2 == "number") {
  switch (option) {
    case 1:
      result = Sumar(num1, num2);
      break;
    case 2:
      result = Restar(num1, num2);
      break;
    case 3:
      result = Multiplicar(num1, num2);
      break;
    case 4:
      result = Dividir(num1, num2);
      break;
  }
  alert("El resultado es: " + result);
} else alert("Formato no valido");

function Sumar(num1, num2) {
  return num1 + num2;
}

function Restar(num1, num2) {
  return num1 - num2;
}

function Multiplicar(num1, num2) {
  return num1 * num2;
}

function Dividir(num1, num2) {
  return num1 / num2;
}

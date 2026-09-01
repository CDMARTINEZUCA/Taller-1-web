//Conversor de temperatura
let input;
let result;

alert("Seleccione la conversión");
input = Number(
  prompt("1. Centigrados a Farenheit \n2. Farenheit a Centigrados \n0. Salir"),
);

selectorConversion(input);

function selectorConversion(input) {
  switch (input) {
    case 1:
      input = Number(prompt("Ingrese los grados Centigrados"));

      if (typeof input != Number) {
        alert("No es un formato valido");
        break;
      }

      result = conversorCentFrh(input);

      alert(input + "°C -> " + result + "°F");
      break;
    case 2:
      input = Number(prompt("Ingrese los grados Farenheit"));

      if (typeof input != Number) {
        alert("No es un formato valido");
        break;
      }

      result = conversorFrhCent(input);

      alert(input + "°F -> " + result + "°C");
      break;
  }
}

function conversorCentFrh(input) {
  return ((input * 9) / 5 + 32).toFixed(2);
}

function conversorFrhCent(input) {
  return ((input - 32) * (5 / 9)).toFixed(2);
}

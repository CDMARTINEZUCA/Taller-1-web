const nota = Number(prompt("Ingresa la nota (0-100):"));

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 80) {
  console.log("Muy Bueno");
} else if (nota >= 70) {
  console.log("Bueno");
} else if (nota >= 60) {
  console.log("Regular");
} else {
  console.log("Reprobado");
}
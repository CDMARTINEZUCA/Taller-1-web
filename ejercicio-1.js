//calculadora descuento
const nombreProducto = prompt("Ingresa el nombre del producto:");
const precioProducto = Number(prompt("Ingresa el precio del producto ($):"));
const porcentajeDescuento = Number(prompt("Ingresa el porcentaje de descuento (%):"));

const montoDescuento = (precioOriginal * porcentajeDescuento) / 100;
const precioFinal = precioOriginal - montoDescuento;

console.log("--- Resumen de Compra ---");
console.log("Producto: ", nombreProducto);
console.log("Precio producto: ", precioProducto.toFixed(2));
console.log(`Descuento ${porcentajeDescuento}%: `, montoDescuento.toFixed(2));
console.log("Precio final a pagar: ", precioFinal.toFixed(2));


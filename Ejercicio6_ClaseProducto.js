class Producto {
    constructor(nombre, precio, stock) {
        
        if(typeof nombre === 'string') {
        this.nombre = nombre;
        } else {
        this.nombre = 'Error: Solo admite texto';
        }

        if(typeof precio === 'number' && !isNaN(precio)) {
            this.precio = '$' + precio;
        } else {
        this.precio = 'Error: Solo admite numero';
        }
    
        if(Number.isInteger(stock)) {
            this.stock = stock + ' unidades';
        } else {
        this.stock = 'Error: Solo admite numero entero';
        }
    }
    
    mostrarInformacion() {
    console.log('Producto: ' + this.nombre);
    console.log('Precio: ' + this.precio);
    console.log('Stock: ' + this.stock);
    }
}

let Producto1 = new Producto('Mouse', 20, 30);
let Producto2 = new Producto('Audifonos', 15.20, 5);

Producto1.mostrarInformacion();
console.log('---------------------------');
Producto2.mostrarInformacion();
function generarUsuario(nombreCompleto) {
    let textoMinusculas = nombreCompleto.toLowerCase();
    let textoSinEspacios = textoMinusculas.replaceAll(' ', '');
    let textoFinal = textoSinEspacios + "_dev";
    return textoFinal;
};

let resultado =  generarUsuario('José Ariel Álvarez Morales');
console.log(resultado);

function comprobar(evt) {
    const nombre = document.getElementById("nombre");
    const edad = document.getElementById("edad");
    const clave = document.getElementById("clave");

    let errores = "";
    // Con el método checkValidity podemos comprobar si un elemento 
    // cumple las restricciones HTML que hayamos puesto (required, min, ...)
    if(nombre.checkValidity() == false) {
        // \n es para realizar un salto de línea
        errores = "El nombre falta o es incorrecto\n";
    }
    if(edad.checkValidity() == false) {
        // el += para que no se pierdan los posibles errores anteriores
        errores += "La edad debe estar entre 18 y 100\n";
    }
    if(clave.checkValidity() == false) {
        errores += "La clave debe tener al menos 6 caracteres\n";
    }
    if(errores != "") { // Vemos si errores tiene algo
        alert(errores);
        evt.preventDefault();
    }
}


document.getElementById("formulario")
    .addEventListener("submit", comprobar);
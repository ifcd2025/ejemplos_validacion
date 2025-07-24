function comprobar(evt) {
    const nombre = document.getElementById("nombre");
    const edad = document.getElementById("edad");
    const errores = document.getElementById("errores");
    errores.textContent = "";
    const mensajesError = [];
    if(isVacio(nombre.value)) {
        mensajesError.push("Debes poner el nombre");
    } else if(isLongitudMinima(nombre.value, 3) == false) {
        mensajesError.push("El nombre debe tener 3 caracteres como mínimo");
    } 
    if(isVacio(edad.value)) {
        mensajesError.push("Debes poner la edad");
    } else if(isEntero(edad.value) == false) {
        mensajesError.push("La edad debe ser un número");
    } else if(isNumeroMinimoMaximo(edad.value, 18, 100) == false) {
        mensajesError.push("La edad debe estar entre 18 y 100");
    }    
    if(mensajesError != []) {
        evt.preventDefault();
        for (const mensaje of mensajesError) {
            const p = document.createElement("p");
            errores.appendChild(p);
            p.textContent = mensaje;
        }
    } 
}

document.getElementById("formulario")
    .addEventListener("submit", comprobar);
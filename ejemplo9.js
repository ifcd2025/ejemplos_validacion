function comprobar(evt) {
    const nombre = document.getElementById("nombre");
    const edad = document.getElementById("edad");
    const errores = document.getElementById("errores");
    const mensajesError = [];
    if(isVacio(nombre.value)) {
        // Para que muestre textos propios en los errores
        mensajesError.push("Debes poner el nombre");
        evt.preventDefault();
    }
    if(isLongitudMinima(nombre.value, 3) == false) {
        mensajesError.push("El nombre debe tener 3 caracteres como mínimo");
        evt.preventDefault();
    } 
    if(isVacio(edad.value)) {
        mensajesError.push("Debes poner la edad");
        evt.preventDefault();
    }
    if(isEntero(edad.value) == false) {
        mensajesError.push("La edad debe ser un número");
    }  
    if(isNumeroMinimoMaximo(edad.value, 18, 100) == false) {
        mensajesError.push("La edad debe estar entre 18 y 100");
    }    
    if(mensajesError != []) {
        for (const mensaje of mensajesError) {
            const p = document.createElement("p");
            errores.appendChild(p);
            p.textContent = mensaje;
        }
    } else {
        mensajesError.textContent = "";
    }
}

document.getElementById("formulario")
    .addEventListener("submit", comprobar);
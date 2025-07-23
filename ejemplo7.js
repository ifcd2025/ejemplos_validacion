function comprobar(evt) {
    const nombre = document.getElementById("nombre");
    const edad = document.getElementById("edad");
    const clave = document.getElementById("clave");

    // Para no ir haciendo elses para quitar los posibles fondos rojos
    // podríamos hacer esto
    /*document.getElementsByClassName("bg-danger-subtle")
        .forEach( e => e.classList.remove("bg-danger-subtle"));
    */
   
    let errores = []; // Creamos un array vacío

    // Con el método checkValidity podemos comprobar si un elemento 
    // cumple las restricciones HTML que hayamos puesto (required, min, ...)
    if(nombre.checkValidity() == false) {
        // Con push añadimos un elemento al final del array
        errores.push("El nombre falta o es incorrecto");
        nombre.classList.add("bg-danger-subtle");
        //nombre.style.backgroundColor = "lightsalmon";
    } else {
        nombre.classList.remove("bg-danger-subtle");
        //nombre.style.backgroundColor = "inherit";
    }
    if(edad.checkValidity() == false) {
        errores.push("La edad debe estar entre 18 y 100");
        edad.classList.add("bg-danger-subtle");
        //edad.style.backgroundColor = "lightsalmon";
    } else {
        edad.classList.remove("bg-danger-subtle");
        //edad.style.backgroundColor = "inherit";
    }
    if(clave.checkValidity() == false) {
        errores.push("La clave debe tener al menos 6 caracteres");
        clave.classList.add("bg-danger-subtle");
        //clave.style.backgroundColor = "lightsalmon";        
    } else {
        clave.classList.remove("bg-danger-subtle");
        //clave.style.backgroundColor = "inherit";
    }
    if(errores != "") { // Vemos si errores tiene algo
        alert(errores);
        evt.preventDefault();
    }
}
document.getElementById("formulario")
    .addEventListener("submit", comprobar);
function comprobar(evt) {
    const nombre = document.getElementById("nombre");
    const edad = document.getElementById("edad");
    const clave = document.getElementById("clave");
    const repetirClave = document.getElementById("repetirClave");
    const provincia = document.getElementById("provincia");

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
    if(repetirClave.value != clave.value) {
        errores.push("Las claves no coinciden");
        repetirClave.classList.add("bg-danger-subtle");
        //clave.style.backgroundColor = "lightsalmon";
    } else {
        repetirClave.classList.remove("bg-danger-subtle");
        //repetirClave.style.backgroundColor = "inherit";
    }
    if(provincia.selectedIndex == 0) {
        errores.push("Selecciona la provincia");
        // Hoy día los navegadores no ponen en rojo el select
        provincia.classList.add("bg-danger-subtle");
        //provincia.style.backgroundColor = "lightsalmon";
    } else {
        provincia.classList.remove("bg-danger-subtle");
        //provincia.style.backgroundColor = "inherit";
    }
    
    const ul = document.getElementById("errores");
    if(errores != []) { // Vemos si errores tiene algo
        evt.preventDefault();
        ul.classList.remove("d-none");
        ul.textContent = "";
        for (const error of errores) {
            const li = document.createElement("li");
            ul.appendChild(li);
            li.textContent = error;
        }
    } else {
        ul.classList.add("d-none");
    }
}
document.getElementById("formulario")
    .addEventListener("submit", comprobar);
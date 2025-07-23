function comprobar(evt) {
    const nombre = document.getElementById("nombre");
    // La expresión regular va entre / /
    // test devuelve true si el valor pasado cumple el patrón 
    // Si nos da igual mayúsculas de minúsculas, añadimos el flag i
    // En el atributo pattern de HTML se sobreentiende que el patrón
    // no tenga nada antes o después. En JS hay que usar ^ (comienzo)
    // y $ (fin) casi siempre
    if(/^[a-z]{3,}$/i.test(nombre.value) == false) {
        console.log("El nombre es incorrecto");
        // Cancelamos la acción por defecto, que en este caso,
        // es enviar el formulario
        evt.preventDefault();
    }
    const edad = document.getElementById("edad").value;
    if(edad < 18 || edad > 100 ) {
        console.log("La edad debe estar entre 18 y 100");
        evt.preventDefault();
    }
    const clave = document.getElementById("clave");
    const repetirClave = document.getElementById("repetirClave");
    // (?=.*[A-Z]) que busque hacia adelante si hay una mayúscula
    // (?=.*\d) que busque hacia adelante si hay un número
    if(/^(?=.*[A-Z])(?=.*\d)[a-z0-9]{6,}$/i.test(clave.value) == false) {
        console.log("la clave no cumple los criterios");
        evt.preventDefault();
    }
    if(clave.value != repetirClave.value) {
        console.log("las claves no coinciden");
        evt.preventDefault();
    }
    const provincia = document.getElementById("provincia").value;
    // si no se indica value en los options, value tiene el texto
    // del elemento
    // Para esto suele ser mejor pregunta si selectedIndex es -1
    //if(document.getElementById("provincia").selectedIndex == -1) {
    if(provincia == "Seleccionar") {
        console.log("selecciona una provincia");
        evt.preventDefault();
    }
    const menorEdad = document.getElementById("menorEdad");
    const mayorEdad = document.getElementById("mayorEdad");
    if(menorEdad.checked == false && mayorEdad.checked == false){
        console.log("selecciona si eres mayor o menor de edad");
        evt.preventDefault();        
    }
    const acepto = document.getElementById("acepto");
    if(acepto.checked == false) {
        console.log("Debes aceptar las condiciones");
        evt.preventDefault();
    }
}

/* Normalmente la validación la haremos en el evento submit del formulario */
document.getElementById("formulario").addEventListener("submit", comprobar);
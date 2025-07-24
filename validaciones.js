/**
 * Comprueba si un texto está vacío
 * @param {string} valor 
 * @returns {boolean} true si está vacío, false si no
 */
function isVacio(valor) {
    if(valor.trim() === "") {
        return true;
    } else {
        return false;
    }
    //return valor.trim() === "";
}

/**
 * Comprueba si un texto tiene una longitud mínima
 * @param {string} valor - el texto a comprobar
 * @param {number} minimo - la longitud mínima
 * @returns {boolean} - true si tiene la longitud mínima, false si no
 */
function isLongitudMinima(valor, minimo) {
    if(valor.trim().length < minimo) {
        return false;
    } else {
        return true;
    }
    //return valor.trim().length >= minimo;
}

function isLongitudMaxima(valor, maximo) {
    if(valor.trim().length > maximo) {
        return false;
    } else {
        return true;
    }
    //return valor.trim().length <= maximo;
}

function isLongitudMinimaMaxima(valor, minimo, maximo) {
    return isLongitudMinima(valor, minimo) && isLongitudMaxima(valor, maximo);
}

function isEntero(valor) {
    return /^[+-]?\d+$/.test(valor);
}

function isDecimal(valor) {
    // Si hay coma decimal, la cambiamos por un punto
    valor = valor.replace(",", ".");
    return /^[+-]?\d+(\.\d+)?$/.test(valor);
}

function isNumeroMinimo(numero, minimo) {
    return numero >= minimo;
}

function isNumeroMaximo(numero, maximo) {
    return numero <= maximo;
}

function isNumeroMinimoMaximo(numero, minimo, maximo) {
    return isNumeroMinimo(numero, minimo) && isNumeroMaximo(numero, maximo);
}

function isFecha(valor) {
    if(/^(\d{1,2}[-\/]){2}\d{4}$/.test(valor) == false) {
        return false;
    }
    valor = valor.replace("-", "/");
    let [dia, mes, año] = valor.split("/");

    // - 1 ya que enero es el mes 0
    const fecha = new Date(año, mes - 1, dia);
    if(isNaN(fecha.getTime())) {
        return false;
    }
    // Si creamos el objeto con días de más, no da error, y lo que hace es
    // pasar al siguiente mes y puede que también al siguiente año
    if(fecha.getFullYear() == año 
        && fecha.getMonth() == mes - 1 
        && fecha.getDate() == dia) { // getDate es el día del mes
            return true;
        }
    else {
        return false;
    }
}

function isRadiosMarcado(nombre) {
    document.getElementsByTagName(nombre).forEach(radio => {
        if(radio.checked) {
            return true;
        }    
    });
    return false;
}

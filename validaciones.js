/**
 * Comprueba si un texto está vacío
 * @param {string} valor - el texto a comprobar
 * @returns {boolean} - true si está vacío, false si no
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

/**
 * Comprueba si un texto tiene una longitud máxima
 * @param {string} valor - el texto a comprobar
 * @param {number} maximo - la longitud máxima
 * @returns {boolean} - true si no sobrepasa la longitud máxima, false si lo hace
 */
function isLongitudMaxima(valor, maximo) {
    if(valor.trim().length > maximo) {
        return false;
    } else {
        return true;
    }
    //return valor.trim().length <= maximo;
}

/**
 * Comprueba si un texto tiene la longitud en el rango indicado
 * @param {string} valor - el texto a comprobar
 * @param {number} minimo - la longitud mínima
 * @param {number} maximo - la longitud máxima
 * @returns {boolean} - true si está dentro del rango, false si no
 */
function isLongitudMinimaMaxima(valor, minimo, maximo) {
    return isLongitudMinima(valor, minimo) && isLongitudMaxima(valor, maximo);
}

/**
 * Comprueba si un texto es un número entero (sin decimales)
 * @param {string} valor - el valor a comprobar
 * @returns {boolean} - true si lo es, false si no
 */
function isEntero(valor) {
    return /^[+-]?\d+$/.test(valor);
}

/**
 * Comprueba si un texto es un número entero o decimal
 * @param {string} valor - el valor a comprobar, pudiendo usar el punto o la coma como separador decimal
 * @returns {boolean} - true si lo es, false si no
 */
function isDecimal(valor) {
    // Si hay coma decimal, la cambiamos por un punto
    valor = valor.replace(",", ".");
    return /^[+-]?\d+(\.\d+)?$/.test(valor);
}

/**
 * Comprueba si un número es mayor o igual al mínimo indicado
 * @param {number} numero - el número a comprobar
 * @param {number} minimo - valor mínimo
 * @returns {boolean} - true si lo es, false si no
 */
function isNumeroMinimo(numero, minimo) {
    return numero >= minimo;
}

/**
 * Comprueba si un número es menor o igual al máximo indicado
 * @param {number} numero - el número a comprobar
 * @param {number} maximo - valor máximo
 * @returns {boolean} - true si lo es, false si no
 */
function isNumeroMaximo(numero, maximo) {
    return numero <= maximo;
}

/**
 * Comprueba si un número está dentro del rango indicado (ambos incluidos)
 * @param {number} numero - el número a comprobar
 * @param {number} minimo - el valor mínimo
 * @param {number} maximo - el valor máximo
 * @returns {boolean} - true si está dentro del rango, false si no
 */
function isNumeroMinimoMaximo(numero, minimo, maximo) {
    return isNumeroMinimo(numero, minimo) && isNumeroMaximo(numero, maximo);
}

/**
 * Comprueba si un valor es una fecha válida
 * @param {string} valor - la fecha a comprobar en formato dd/mm/aaaa o d/m/aaaa
 * @returns {boolean} - true si es una fecha, false si no
 */
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

/**
 * Comprueba si en un grupo de radios hay alguno marcado
 * @param {string} nombre - el atributo name de los radios
 * @returns {boolean} - true si hay alguno marcado, false si no
 */
function isRadiosMarcado(nombre) {
    document.getElementsByTagName(nombre).forEach(radio => {
        if(radio.checked) {
            return true;
        }    
    });
    return false;
}

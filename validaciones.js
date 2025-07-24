function isVacio(valor) {
    if(valor.trim() === "") {
        return true;
    } else {
        return false;
    }
    //return valor.trim() === "";
}

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
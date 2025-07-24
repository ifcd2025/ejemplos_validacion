// Indicamos el id del formulario
const validador = new window.JustValidate("#formulario");
validador
    .addField("#nombre" ,
        [
            {
                rule: "required",
                errorMessage: "El nombre es obligatorio"
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "Mínimo 3 caracteres en el nombre"
            }
        ]
    )
    .addField("#edad",
        [
            {
                rule: "required",
                errorMessage: "La edad es obligatoria"
            },
            {
                rule: "integer",
                errorMessage: "La edad debe ser un número sin decimales"

            },
            {
                rule: "minNumber",
                value: 18,
                errorMessage: "La edad debe ser 18 o más"
            },
            {
                rule: "maxNumber",
                value: 100,
                errorMessage: "La edad deber ser menor o igual a 100"
            },            
        ]
    )
    .addRequiredGroup("#mayorEdad", "Debes seleccionar si eres mayor o menor de edad")
    .addField("#clave",
        [
            {
                rule: "required",
                errorMessage: "La clave es obligatoria"
            },
            {
                rule: "password",
                errorMessage: "La clave no cumple los requisitos"
            }
        ]
    )
    .addField("#repetirClave",
        [
            {
                rule: "required",
                errorMessage: "La clave es obligatoria"
            },
            {
                // valor es el valor a comprobar y campos los elementos
                // del formulario
                validator: (valor, campos) => {
                    return valor === campos["#clave"].elem.value;
                    //return valor === document.getElementById("clave").value;
                },
                errorMessage: "Las claves no coinciden"
            }
        ]
    )
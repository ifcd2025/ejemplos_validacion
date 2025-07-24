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
                value: 6,
                errorMessage: "Mínimo 6 caracteres en el nombre"
            },
            {
                rule: "maxLength",
                value: 10,
                errorMessage: "Máximo 10 caracteres en el nombre"
            }
        ]
    )
    .addField("#minimo",
        [
            {
                rule: "required",
                errorMessage: "El mínimo es obligatorio"
            },
            {
                rule: "number",
                errorMessage: "El mínimo debe ser un número"

            },
            {
                rule: "minNumber",
                value: 1,
                errorMessage: "La puja mínima es de 1 euro"
            },            
        ]
    )
    .addField("#maximo",
        [
            {
                rule: "required",
                errorMessage: "El máximo es obligatorio"
            },
            {
                rule: "number",
                errorMessage: "El máximo debe ser un número"

            },
            {
                validator: (valor, campos) => {
                    // Como valor y value son string, al comparar con >, <,... hay problemas,
                    //pues compara letra a letra, con lo que 5 es mayor que 10, por ejemplo
                    // Por eso les hacemos un parseFloat
                    return parseFloat(valor) > parseFloat(campos["#minimo"].elem.value);
                },
                errorMessage: "El máximo debe ser mayor que el mínimo"
            }
        ]
    )

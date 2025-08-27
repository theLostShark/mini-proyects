const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonPulsado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                let resultado = eval(pantalla.textContent);
                // Si el resultado es un número finito, limitamos a 5 decimales si es necesario
                if (Number.isFinite(resultado)) {
                   resultado = Number(resultado.toFixed(5));
               }
               pantalla.textContent = resultado;
            } catch {
                pantalla.textContent = "ERROR";
            }
            return;
        }

        if (boton.id === "signo") {
            let contenidoPantalla = pantalla.textContent;
            let ultimoCaracter = contenidoPantalla.slice(-1);

            // Buscamos el último número en la pantalla
            const regexUltimoNumero = /(-?\d+(\.\d+)?)$/;
            let match = contenidoPantalla.match(regexUltimoNumero);

            if (match) {
                let numeroActual = match[0];
                let numeroConSigno = (parseFloat(numeroActual) * -1).toString();

                // Reemplazar solo el último número con el mismo número pero con el signo cambiado
                pantalla.textContent = contenidoPantalla.replace(regexUltimoNumero, numeroConSigno);
            }
            return;
        }

        if (boton.id === "porcentaje") {
            try {
                // Calcula el porcentaje del número anterior
                let contenidoPantalla = pantalla.textContent;
                const operadores = ['+', '-', '*', '/'];
                let operador = null;
                let numeroAnterior = '';

                // Buscamos el operador más reciente para calcular el porcentaje con el número anterior
                for (let i = contenidoPantalla.length - 1; i >= 0; i--) {
                    if (operadores.includes(contenidoPantalla[i])) {
                        operador = contenidoPantalla[i];
                        numeroAnterior = contenidoPantalla.slice(0, i);
                        break;
                    }
                }

                if (operador && numeroAnterior) {
                    let numeroActual = parseFloat(contenidoPantalla.split(operador).pop());
                    let porcentaje = (numeroAnterior * numeroActual) / 100;
                    pantalla.textContent = numeroAnterior + operador + porcentaje;
                } else {
                    // Si no hay un operador, simplemente convierte el número a porcentaje del 100
                    pantalla.textContent = parseFloat(pantalla.textContent) / 100;
                }

            } catch {
                pantalla.textContent = "ERROR";
            }
            return;
        }


        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
            pantalla.textContent = botonPulsado;
        } else {
            pantalla.textContent += botonPulsado;
        }
    })
})

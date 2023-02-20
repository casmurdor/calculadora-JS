/**
 * En este repositorio entrega la calculadora de la tarea anterior. Toma como base esta calculadora. Recuerda:
 *   - Parte de un documento html vacío
 *   - Crea los elementos HTML de la calculadora mediante los métodos del objeto predefinido document.
 *     Ni tablas ni li, ni document.write() ni fichero.css están permitidos. Dale un buen uso a las etiquetas
 * 
 * Añádele ahora el comportamiento del display bien controlado (ni +, ni -, ni x ni %):
 *   1. Inicialmente en el display aparece el cero sin decimal.
 *   2. En el display sólo puede aparecer un punto decimal.
 *   3. A la izquierda del punto sólo puede aparecer un cero ("00.1" no es válido).
 *   4. No hay que escribir "0." para que te acepte el decimal. Basta con que pulse la coma decimal. Entonces el resto se consideran decimales.
 *   5. En el display siempre ha de haber un dígito. En caso de usar el retroceso y ser el último carácter aparecerá un cero.
 *   6. El cero negativo no existe ("-0" no es válido)
 * 
 * Una vez controlado el display sin operaciones, añade el resto de funcionalidad
 *   1. Recuerda que en el display no pueden aparecer las operaciones (x, /, +, -...)
 *   2. Quizás tengas que añadir los siguientes atributos/propiedades al objeto literal: reset (limpiar display), acumulado, última operación...
 * 
 * El diseño parte del ejercicio del tema anterior. Procura que el patrón de diseño sea con un objeto literal.
 * 
 * Ten en cuenta los siguientes detalles:
 *   - Usa funciones arrow en la medida de lo posible.
 *   - Evita el uso del for clásico
 *   - No uses document.get... y añade el comportamiento conforme los vayas creando
 * 
 * @author Andrés Castillero Moriana
 */
{
    /**
     * Añade el estilo css a la página.
     */
    const meter_css = () => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./css/style.css";
        document.head.appendChild(link);
    };

    const calculadora = {
        pantalla: "0",
        valor_real: 0,
        segundo_operando: 0,
        operando: false,
        ultimo_boton: "",

        /**
         * Comprueba el botón que se ha pulsado y ejecuta la acción correspondiente.
         * 
         * @param {string} boton el botón que se ha pulsado.
         */
        comprobar_boton: function (boton) {
            switch (boton) {
                case "+":
                    this.sumar();
                    break;
                case "-":
                    this.restar();
                    break;
                case "X":
                    this.multiplicar();
                    break;
                case "÷":
                    this.dividir();
                    break;
                case "%":
                    this.modulo();
                    break;
                case "=":
                    this.resultado();
                    break;
                case ",":
                    this.agregar_separador_decimal();
                    break;
                case "CE":
                    this.resetear_calculadora();
                    break;
                case "±":
                    this.cambiar_signo();
                    break;
                case "←":
                    this.borrar_ultimo_caracter();
                    break;
                default:
                    this.agregar_numero(boton);
                    break;
            };
        },

        sumar: function () {
            if (!this.operando) {
                this.operando = true;
                this.pantalla = "0";
                this.ultimo_boton = "+";
            }
        },

        restar: function () {
            if (!this.operando) {
                this.operando = true;
                this.pantalla = "0";
                this.ultimo_boton = "-";
            }
        },

        multiplicar: function () {
            if (!this.operando) {
                this.operando = true;
                this.pantalla = "0";
                this.ultimo_boton = "X";
            }
        },

        dividir: function () {
            if (!this.operando) {
                this.operando = true;
                this.pantalla = "0";
                this.ultimo_boton = "÷";
            }
        },

        modulo: function () {
            if (!this.operando) {
                this.operando = true;
                this.pantalla = "0";
                this.ultimo_boton = "%";
            }
        },

        resultado: function () {
            if (this.operando) {
                this.operando = false;
                switch (this.ultimo_boton) {
                    case "+":
                        this.valor_real = this.valor_real + this.segundo_operando;
                        this.pantalla = this.valor_real.toString().replace(".", ",").substring(0, 9); // substring para que no se salga de la pantalla
                        break;
                    case "-":
                        this.valor_real = this.valor_real - this.segundo_operando;
                        this.pantalla = this.valor_real.toString().replace(".", ",").substring(0, 9);
                        break;
                    case "X":
                        this.valor_real = this.valor_real * this.segundo_operando;
                        this.pantalla = this.valor_real.toString().replace(".", ",").substring(0, 9);
                        break;
                    case "÷":
                        this.valor_real = this.valor_real / this.segundo_operando;
                        this.pantalla = this.valor_real.toString().replace(".", ",").substring(0, 9);
                        break;
                    case "%":
                        this.valor_real = this.valor_real % this.segundo_operando;
                        this.pantalla = this.valor_real.toString().replace(".", ",").substring(0, 9);
                        break;
                }
            }
        },

        /**
         * Añade el punto decimal a la calculadora.
         */
        agregar_separador_decimal: function () {
            if (this.pantalla == "0")
                this.pantalla = "0" + ",";
            else if (!this.pantalla.includes(","))
                this.pantalla = this.pantalla + ",";

            this.valor_real = parseFloat(this.pantalla.replace(",", "."));
        },

        /**
         * Cambia el signo del número que se está escribiendo en la calculadora.
         */
        cambiar_signo: function () {
            if (!this.pantalla == "0") {
                this.valor_real = -this.valor_real;
                this.pantalla = this.valor_real.toString().replace(".", ",");
            }
        },

        /**
         * Borra el último número introducido en la calculadora.
         */
        borrar_ultimo_caracter: function () {
            if (this.pantalla.length === 1) {
                this.pantalla = "0";
                this.valor_real = 0;
            } else {
                this.valor_real = parseFloat(this.pantalla.replace(",", ".").substring(0, this.pantalla.length - 1));
                this.pantalla = this.valor_real.toString().replace(".", ",");
            }
        },

        /**
         * Añade un número a la calculadora.
         * 
         * @param {string} numero el número que se quiere añadir a la calculadora.
         */
        agregar_numero: function (numero) {
            if (!this.operando) {
                if (this.pantalla == "0") {
                    this.pantalla = numero;
                    this.valor_real = parseFloat(numero);
                }
                else {
                    this.pantalla = this.pantalla + numero;
                    this.valor_real = parseFloat(this.pantalla.replace(",", "."));
                };
            } else {
                this.pantalla = numero;
                this.segundo_operando = parseFloat(numero);
            };
        },

        /**
         * Resetea la calculadora.
         */
        resetear_calculadora: function () {
            this.pantalla = "0";
            this.valor_real = 0;
        },

        /**
         * Dibuja la calculadora en la página.
         */
        dibujar_calculadora: function () {
            const fragment = document.createDocumentFragment();

            const input = document.createElement("input");
            input.value = this.pantalla;
            input.setAttribute("type", "text");
            input.setAttribute("readonly", "readonly");
            fragment.appendChild(input);

            const botones = ["CE", "←", "%", "+", 7, 8, 9, "-", 4, 5, 6, "X", 1, 2, 3, "÷", 0, "±", ",", "="];

            const boton_container = document.createElement("div");
            botones.forEach((element, index) => {
                const boton = document.createElement("button");
                boton.textContent = element;
                boton_container.appendChild(boton);

                if ((index + 1) % 4 === 0)
                    boton_container.appendChild(document.createElement("br"));
            });

            fragment.appendChild(boton_container);
            document.body.appendChild(fragment);
        },

        /**
         * Inicializa la calculadora.
         */
        init: function () {
            this.dibujar_calculadora();

            // Mediante delegación de eventos le damos funcionalidad a los botones.
            const botones = document.querySelectorAll("button");
            const input = document.querySelector("input");
            botones.forEach((boton) => {
                boton.addEventListener("click", () => {
                    this.comprobar_boton(boton.textContent);
                    input.value = this.pantalla;
                });
            });
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        meter_css();
        calculadora.init();
    });
}

# Ejercicio 4.2. Calculadora mediante objeto literal completa

Acaba de implementar la calculadora según las siguientes instrucciones. Deberás corregir mediante issues (que tu compañero cerrará en el mensaje del commit) el trabajo de tu compañero, al igual que él lo hará con el tuyo. Para ello en tu repositorio local añade un remote a un repositorio PRIVADO, pero recuerda que yo (dlopezmfp) también debo tener acceso a vuestra colaboración. Añádeme como colaboradora.

Debes entregar:

* url de mi calculadora
* url de la calculadora que reviso

En el mismo repositorio de la tarea anterior entrega una nueva versión de la calculadora. Toma como base [esta calculadora](https://www.webestools.com/scripts_tutorials-code-source-8-javascript-calculator-buttons-calculator-keyboard-support-operations-modulo.html). Recuerda:

* Parte de un documento html vacío
* Crea los elementos HTML de la calculadora mediante los métodos del objeto predefinido document.

En un segundo paso añádele el comportamiento del display bien controlado:

1. Inicialmente en el display aparece el cero sin decimal.
1. En el display sólo puede aparecer un punto decimal.
1. A la izquierda del punto sólo puede aparecer un cero ("00.1" no es válido).
1. No hay que escribir "0." para que te acepte el decimal. Basta con que pulse la coma decimal. Entonces el resto se consideran decimales.
1. En el display siempre ha de haber un dígito. En caso de usar el retroceso y ser el último carácter aparecerá un cero.
1. El cero negativo no existe ("-0" no es válido)

Una vez controlado el display sin operaciones, añade el resto de funcionalidad

1. Recuerda que en el display no pueden aparecer las operaciones (x, /, +, -...)
1. Quizás tengas que añadir los siguientes atributos/propiedades al objeto literal: reset (limpiar display), acumulado, última operación...

El diseño parte del ejercicio del tema anterior. Procura que el patrón de diseño sea con un objeto literal.

Ten en cuenta los siguientes detalles:

* Usa funciones arrow en la medida de lo posible.
* Evita el uso del for clásico
* Usa el método [document.createDocumentFragment()](https://developer.mozilla.org/es/docs/Web/API/Document/createDocumentFragment) para no causar reflow (cómputo de la posición y geometría de los elementos) en el documento. Si usas document fragments usualmente se [mejora la eficiencia](https://johnresig.com/blog/dom-documentfragments/).
* Es innecesario el uso de id en los elementos del DOM. Evítalos
* Es innecesario el uso de document.get...
* Usa una función que devuelva el comportamiento de cada botón para asignar el comportamiento
``boton.addEventListener("click", calculadora.comportamiento(valor));``

## Referencia

* [Learning JavaScript Design Patterns](https://www.patterns.dev/posts/classic-design-patterns/#modulepatternjavascript) (Object literals)
* [syntax introduced in ES5.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions#description)

## Solución

[HTML](./index.html) | [JS](./js/main.js)

## Autor: [Andrés Castillero Moriana](https://github.com/a19camoan)

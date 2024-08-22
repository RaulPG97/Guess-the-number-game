# Juego de Adivinanza de Números

Este es un sencillo juego de adivinanza de números implementado en JavaScript, HTML y CSS. El objetivo del juego es que el usuario adivine un número generado aleatoriamente entre 0 y 3. El juego proporciona retroalimentación sobre si la suposición del usuario es correcta o incorrecta.

## Características

- **Generación Aleatoria de Números**: El juego genera un número aleatorio entre 0 y 3 cada vez que el usuario intenta adivinar.
- **Validación de Entrada**: Si el usuario no ingresa un número, se muestra un mensaje indicándole que debe ingresar uno.
- **Retroalimentación Instantánea**: Después de que el usuario hace su suposición, el juego muestra si fue correcta o incorrecta.
- **Reinicio Automático**: Después de mostrar el resultado, la pantalla se reinicia automáticamente para permitir un nuevo intento.

## Cómo Jugar

1. **Ingrese un Número**: El usuario debe ingresar un número entre 0 y 3 en el campo de entrada.
2. **Haga clic en "Enviar"**: Después de ingresar el número, el usuario debe hacer clic en el botón de "Enviar" para confirmar su suposición.
3. **Vea el Resultado**: El juego mostrará si la suposición fue correcta o incorrecta.
   - Si la suposición es correcta, se mostrará "Correcto: X", donde `X` es el número generado.
   - Si la suposición es incorrecta, se mostrará "Incorrecto: X", donde `X` es el número generado.
4. **Nuevo Intento**: Después de 1 segundo, el texto de la pantalla se reiniciará a "????" para permitir un nuevo intento.

## Estructura del Código

El código principal está encapsulado dentro de un evento `DOMContentLoaded` para asegurar que el DOM esté completamente cargado antes de la manipulación.

### Funciones Principales

- **`generateRandomNumber()`**: Genera un número aleatorio entre 0 y 3.
- **`isGuessCorrect(userGuess, randomNumber)`**: Verifica si la suposición del usuario coincide con el número aleatorio generado.
- **`displayGuessResult(number, isCorrect)`**: Muestra el resultado de la suposición del usuario (correcta o incorrecta) y reinicia el juego después de un segundo.

### Validación de Entrada

Antes de realizar la comparación, el código valida si la entrada del usuario es un número. Si no lo es, se muestra un mensaje indicando que se debe ingresar un número válido, y la pantalla se reinicia automáticamente después de un segundo.

## Requisitos

- **Navegador Web**: Cualquier navegador moderno que soporte HTML, CSS y JavaScript.

## Instalación

No se requiere instalación. Simplemente abre el archivo HTML en un navegador web para jugar.

## Personalización

Puedes ajustar el rango de números aleatorios cambiando el valor en la función `generateRandomNumber`. Por ejemplo, para generar números entre 0 y 9, puedes cambiar `Math.floor(Math.random() * 4)` a `Math.floor(Math.random() * 10)`.

## Contribuciones

Este es un proyecto sencillo, pero si tienes sugerencias o mejoras, siéntete libre de enviar un pull request o abrir un issue.

## Autor

Este juego fue creado como un ejemplo básico de cómo usar JavaScript para interactuar con el DOM y crear una simple aplicación de juego.

## Licencia

Este proyecto es de dominio público. Puedes usarlo y modificarlo como desees.

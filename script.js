// 1. Seleccionar los elementos del DOM
const boton = document.getElementById('convertirBtn');
const inputCelsius = document.getElementById('celsius');
const resultadoF = document.getElementById('resultadoFahrenheit');
const resultadoK = document.getElementById('resultadoKelvin');
const errorContainer = document.getElementById('error-message');

// Función auxiliar para mostrar el error estético
function mostrarError(mensaje) {
    errorContainer.textContent = mensaje;
    errorContainer.style.display = 'block';
    inputCelsius.classList.add('input-error');
    
    resultadoF.textContent = "--";
    resultadoK.textContent = "--";
}

// Función auxiliar para limpiar el estado de error
function limpiarError() {
    errorContainer.textContent = "";
    errorContainer.style.display = 'none';
    inputCelsius.classList.remove('input-error');
}

// Escuchar cuando el usuario escribe para quitar el diseño de error de inmediato
inputCelsius.addEventListener('input', limpiarError);

// 2. Escuchar el evento de click en el botón
boton.addEventListener('click', () => {
    // Obtener el valor crudo del input como texto
    const valorInput = inputCelsius.value.trim();
    
    // Convertir a número decimal
    const celsius = parseFloat(valorInput);

    // VALIDACIÓN: Comprobar si está vacío o si no es un número válido
    if (valorInput === "" || isNaN(celsius)) {
        // Mostrar mensaje de error en los resultados
        resultadoF.textContent = "Error: Entrada no válida";
        resultadoK.textContent = "Error: Entrada no válida";
        
        // Alerta al usuario
        alert('Por favor, ingresa un número válido. Inténtalo de nuevo.');
        
        // Volver a solicitar los datos visualmente:
        inputCelsius.value = ""; // Limpia el input text
        inputCelsius.focus();    // Coloca el cursor automáticamente en el input para reescribir
        return;                  // Detiene la ejecución del código
    }

    if (celsius < -273.15) {
        resultadoF.textContent = "Error: Temperatura imposible";
        resultadoK.textContent = "Error: Temperatura imposible";
        
        alert('Error: No es posible tener una temperatura inferior al cero absoluto (0 Kelvin / -273.15 ºC).');
        
        inputCelsius.focus();
        return; // Detiene la ejecución para que no calcule valores negativos en Kelvin
    }

    limpiarError();

    // 3. Realizar los cálculos de conversión (Solo si pasa la validación)
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    // 4. Manipular el DOM para mostrar los resultados exitosos
    resultadoF.textContent = fahrenheit.toFixed(2);
    resultadoK.textContent = kelvin.toFixed(2);
});

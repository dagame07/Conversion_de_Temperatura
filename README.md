# Conversor de Temperatura

Aplicación web sencilla para convertir una temperatura ingresada en grados Celsius a grados Fahrenheit y Kelvin. La interfaz y las instrucciones están en español; los cálculos se realizan en el navegador, sin servidor, cuenta ni dependencias externas.

## Funcionalidades

- Recibe un valor numérico en grados Celsius.
- Calcula y muestra su equivalente en Fahrenheit y Kelvin con dos decimales.
- Rechaza entradas vacías o no numéricas y temperaturas inferiores al cero absoluto.
- Presenta los resultados en una tarjeta con un diseño adaptable a pantallas pequeñas.

La conversión es únicamente desde Celsius: no convierte Fahrenheit o Kelvin de vuelta a Celsius.

## Requisitos

- Un navegador web moderno con JavaScript habilitado.
- No hace falta instalar paquetes ni configurar un entorno de desarrollo.

## Cómo ejecutar

1. Descarga o clona este repositorio.
2. Abre `index.html` directamente en un navegador.
3. Escribe una temperatura en el campo **Grados Celsius** y pulsa **Convertir**.

Puedes visitar el sitio publicado: [Conversor de Temperatura](https://dagame07.github.io/Conversion_de_Temperatura/).

También puedes servir la carpeta con cualquier servidor web estático local y abrir allí `index.html`. No se requiere un backend.

## Uso y validaciones

1. Introduce el valor en el campo numérico. Se aceptan valores positivos, negativos y decimales.
2. Pulsa **Convertir** para calcular ambos resultados.
3. Los resultados se muestran con dos posiciones decimales.

Si el campo está vacío o el valor no es válido, la aplicación muestra una alerta, limpia el campo y coloca de nuevo el foco en él. Si la temperatura es menor que **−273.15 °C**, muestra una alerta indicando que está por debajo del cero absoluto y no realiza la conversión. **−273.15 °C** sí es un valor permitido y equivale a **0.00 K**.

## Fórmulas

La aplicación usa las fórmulas estándar:

```text
Fahrenheit = (Celsius × 9 / 5) + 32
Kelvin     = Celsius + 273.15
```

Por ejemplo, para **25 °C**:

```text
Fahrenheit = 77.00 °F
Kelvin     = 298.15 K
```

## Estructura del proyecto

```text
.
├── index.html   # Contenido y controles de la página
├── style.css    # Presentación visual y adaptación a pantallas pequeñas
├── script.js    # Validación, conversiones y actualización de resultados
└── README.md    # Documentación del proyecto
```

### Componentes principales

- **`index.html`** define el campo para Celsius, el botón, los espacios para los resultados y enlaza los archivos CSS y JavaScript.
- **`style.css`** configura la tarjeta central, la paleta rosa y azul, los controles y los estilos de estados de error. Incluye ajustes para ventanas estrechas.
- **`script.js`** escucha el clic en **Convertir**, valida la entrada y actualiza el contenido de los resultados sin recargar la página.

## Tecnologías

- HTML5
- CSS3
- JavaScript del navegador (JavaScript vanilla)

No utiliza frameworks, bibliotecas ni herramientas de compilación.

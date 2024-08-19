# Pruebas Manuales del Formulario

## Descripción

Este documento proporciona de forma detallada el proceso de pruebas manuales realizado sobre el formulario de la tarea 1. Se describen los pasos necesarios para cargar el formulario, se indican los valores válidos e inválidos para cada campo, y se verifica la accesibilidad del formulario utilizando el lector de pantalla NVDA, como tambien se realizara la descripcion de pasos para la validacion de estilos.

## Índice

1. [Preparación del Entorno](#preparación-del-entorno)
2. [Pasos para Cargar el Formulario](#pasos-para-cargar-el-formulario)
3. [Validación de Campos](#validación-de-campos)
    - [Nombre](#nombre)
    - [Apellido](#apellido)
    - [Número Telefónico](#número-telefónico)
    - [Email](#email)
    - [Fecha de Nacimiento](#fecha-de-nacimiento)
    - [País de Residencia](#país-de-residencia)
    - [Validación de Estilos](validación-de-estilos)    
4. [Exploración con Lector de Pantalla NVDA](#exploración-con-lector-de-pantalla-nvda)
5. [Resultados Esperados](#resultados-esperados)
6. [Conclusión](#conclusión)

## Preparación del Entorno

1. **Herramientas Necesarias**:
   - Navegador web (Chrome, Firefox, etc.)
   - Editor de código (Visual Studio Code)
   - Lector de pantalla NVDA instalado.
   
2. **Archivos Relacionados**:
   - `index.html`
   - `style.css`
   - `script.js`

3. **Configuración Inicial**:
   - Asegurarse de que todos los archivos estén en el mismo directorio y vinculados correctamente.
   - Abrir el archivo `index.html` en un navegador web.

## Pasos para Cargar el Formulario

1. **Abrir el formulario**  
   Navega al archivo `index.html` y ábrelo en un navegador web.

2. **Rellenar el campo "Nombre"**  
   - **Acción**: Ingresar un nombre en el campo "Nombre".
   - **Resultado Esperado**: El campo debería aceptar cualquier combinación de letras sin errores.

3. **Rellenar el campo "Apellido"**  
   - **Acción**: Ingresar un apellido en el campo "Apellido".
   - **Resultado Esperado**: El campo debería aceptar cualquier combinación de letras sin errores.

4. **Rellenar el campo "Número Telefónico"**  
   - **Acción**: Ingresar un número telefónico en el campo correspondiente.
   - **Resultado Esperado**: El campo debería aceptar solo números. Se debería mostrar un error si se ingresan letras o caracteres especiales.

5. **Rellenar el campo "Email"**  
   - **Acción**: Ingresar una dirección de correo electrónico válida.
   - **Resultado Esperado**: El campo debería aceptar solo direcciones de correo electrónico en formato válido. Se debería mostrar un error si se ingresa un formato incorrecto.

6. **Rellenar el campo "Fecha de Nacimiento"**  
   - **Acción**: Seleccionar una fecha utilizando el selector de fechas.
   - **Resultado Esperado**: La fecha seleccionada debería aparecer en el campo.

7. **Rellenar el campo "País de Residencia"**  
   - **Acción**: Ingresar el nombre de un país.
   - **Resultado Esperado**: El campo debería aceptar cualquier combinación de letras sin errores.

8. **Enviar el formulario**  
   - **Acción**: Hacer clic en el botón "Enviar".
   - **Resultado Esperado**: Si todos los campos son válidos, el formulario debería enviarse correctamente. De lo contrario, debería mostrarse un mensaje de error.

9. **Clickear el boton Estilo1, Estilo de alto contraste y Modo Violeta** 

**Estilo1**

**Pasos a Seguir:**
1. Cargar el formulario en un navegador.
2. Verificar que el formulario se cargue con el estilo predeterminado sin aplicar ningún modo especial (Estilo 1).
3. Asegurarse de que el fondo del formulario sea blanco y el texto negro.
4. Comprobar que todos los botones estén en color azul con texto blanco.

**Resultados Esperados:**
- El fondo del formulario debe ser blanco (`#fff`).
- Los bordes deben ser redondeados con un radio de `8px`.
- El texto debe aparecer en color negro.
- Los botones deben tener un fondo azul (`#007bff`) y cambiar a un tono más oscuro (`#0056b3`) al pasar el cursor.

**Resultados Observados:**
- El fondo del formulario es blanco y el texto negro.
- Los bordes están correctamente redondeados.
- Los botones muestran el color azul con el cambio de color esperado al pasar el cursor.

**Estilo de alto contraste** 

**Pasos a Seguir:**
1. Cargar el formulario en un navegador.
2. Hacer clic en el botón "Estilo de Alto Contraste".
3. Verificar que el fondo del formulario cambie a un color oscuro y que el texto sea blanco.
4. Comprobar que los campos de entrada también cambien a un fondo más oscuro con texto blanco.

**Resultados Esperados:**
- El fondo del formulario debe cambiar a un color oscuro (`#333`).
- El texto debe aparecer en color blanco.
- Los campos de entrada deben tener un fondo oscuro (`#555`) y bordes gris oscuro (`#777`).
- Los botones deben cambiar a un fondo oscuro al hacer hover.

**Resultados Observados:**
- El fondo del formulario cambió a oscuro y el texto es blanco.
- Los campos de entrada reflejan el cambio de estilo esperado.
- Los botones cambian correctamente de color al pasar el cursor.

**Modo Violeta**

**Pasos a Seguir:**
1. Cargar el formulario en un navegador.
2. Hacer clic en el botón "Modo Violeta".
3. Verificar que el fondo del formulario cambie a un color violeta y que el texto sea blanco.
4. Comprobar que los campos de entrada también cambien a un fondo violeta claro con texto blanco.

**Resultados Esperados:**
- El fondo del formulario debe cambiar a un color violeta (`#8a2be2`).
- El texto debe aparecer en color blanco.
- Los campos de entrada deben tener un fondo violeta claro (`#a064e1`) y bordes en un tono violeta claro (`#c4a3f3`).
- Los botones deben cambiar a un fondo violeta oscuro al hacer hover.

**Resultados Observados:**
- El fondo del formulario cambió a violeta y el texto es blanco.
- Los campos de entrada reflejan el cambio de estilo esperado.
- Los botones cambian correctamente de color al pasar el cursor.

## Validación de Campos

### Nombre
- **Valores Válidos**: Combinaciones de letras.
- **Valores Inválidos**: Números, caracteres especiales.
- **Validación**: No se realiza una validación específica para nombres más allá de requerir que el campo no esté vacío.

### Apellido
- **Valores Válidos**: Combinaciones de letras.
- **Valores Inválidos**: Números, caracteres especiales.
- **Validación**: No se realiza una validación específica para apellidos más allá de requerir que el campo no esté vacío.

### Número Telefónico
- **Valores Válidos**: Solo números.
- **Valores Inválidos**: Letras, caracteres especiales.
- **Validación**: El formulario valida que solo se ingresen números.

### Email
- **Valores Válidos**: Formato de correo electrónico correcto.
- **Valores Inválidos**: Formato incorrecto de correo electrónico.
- **Validación**: El formulario valida el formato de correo electrónico.

### Fecha de Nacimiento
- **Valores Válidos**: Fecha en formato `YYYY-MM-DD`.
- **Valores Inválidos**: Cualquier formato fuera del permitido.
- **Validación**: El campo requiere una fecha válida seleccionada mediante el selector de fechas.

### País de Residencia
- **Valores Válidos**: Combinaciones de letras.
- **Valores Inválidos**: Números, caracteres especiales.
- **Validación**: No se realiza una validación específica más allá de requerir que el campo no esté vacío.

## Exploración con Lector de Pantalla NVDA

1. **Navegación por el formulario**  
   - **Acción**: Utilizar la tecla TAB para moverse entre los campos del formulario.
   - **Resultado Esperado**: El lector de pantalla debería anunciar cada campo y permitir la navegación y el ingreso de datos sin problemas.

2. **Problemas Detectados**  
   Verificar si algún campo no es accesible o si el lector de pantalla no puede anunciar correctamente el contenido.

## Resultados Esperados

1. **Funcionalidad del Formulario**  
   Todos los campos deberían aceptar los valores válidos y rechazar los inválidos con mensajes de error apropiados. El formulario debería enviarse solo si todos los campos son válidos.

2. **Accesibilidad**  
   El formulario debería ser completamente navegable y utilizable mediante el lector de pantalla NVDA.

## Conclusión

Después de realizar las pruebas manuales, el formulario cumple con los requisitos de validación para cada campo y es accesible mediante el lector de pantalla NVDA, garantizando así una buena experiencia para todos los usuarios, incluidos aquellos con discapacidades visuales.

Tambien se realizaron las pruebas manuales para verificar la funcionalidad y accesibilidad del formulario, así como la correcta aplicación de los diferentes estilos. Los resultados observados coinciden con los resultados esperados, lo que indica que el formulario cumple con los criterios de usabilidad y accesibilidad establecidos.
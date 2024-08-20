// Función para repetir una cadena de texto
function repeatString() {
    const texto = document.getElementById('textoRepetir').value;
    const repeticiones = parseInt(document.getElementById('repeticiones').value);
    const resultadoDiv = document.getElementById('resultadoRepetir');
    
    // Limpiar el contenido previo
    resultadoDiv.innerHTML = '';

    // Crear y agregar elementos <p> con el texto repetido
    for (let i = 0; i < repeticiones; i++) {
        const p = document.createElement('p');
        p.textContent = texto;
        resultadoDiv.appendChild(p);
    }
}

// Función para invertir una cadena de texto
function reverseString() {
    const texto = document.getElementById('textoInvertir').value;
    const resultadoDiv = document.getElementById('resultadoInvertir');
    
    // Invertir el texto
    const textoInvertido = texto.split('').reverse().join('');

    // Crear y agregar un elemento <p> con el texto invertido
    const p = document.createElement('p');
    p.textContent = textoInvertido;
    resultadoDiv.appendChild(p);
}

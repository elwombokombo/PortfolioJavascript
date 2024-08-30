//Suma de rango------------

function sumAll(){
    const numeroA = Number(document.getElementById('numeroA').value);
    const numeroB = Number(document.getElementById('numeroB').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const p = document.createElement('p');

    let suma = 0;
    for(let i = numeroA; i<=numeroB; i++){
        suma += i;
    }
    p.textContent= `Suma total entre ${numeroA} y ${numeroB}= ${suma}`;
    resultado.appendChild(p);
}

//Conversión de Temperatura--------------

function convertToCelsius(){
    const tempEnFarenheit = Number(document.getElementById('TF').value);
    const resultado = document.getElementById('resultado1');
    resultado.innerHTML = '';
    let celsius = (tempEnFarenheit-32)/1.8;
    
    const p = document.createElement('p');
    p.textContent = `${tempEnFarenheit} grados Farenheit, equivalen a ${celsius.toFixed(1)} grados Celsius`;//con toFixed() se redondearía a una cifra despues de la coma
    resultado.appendChild(p);
}

function convertToFarenheit(){
    const tempEnCelsius = Number(document.getElementById('TC').value);
    const resultado = document.getElementById('resultado2');
    resultado.innerHTML = '';
    let farenheit = (1.8 * tempEnCelsius)+32;
    
    const p = document.createElement('p');
    p.textContent = `${tempEnCelsius} grados Celsius, equivalen a ${farenheit.toFixed(1)} grados Farenheit`;//con toFixed() se redondearía a una cifra despues de la coma
    resultado.appendChild(p);
}

//Determinacion de Año Bisiesto ----------

function leapYears(){
    const yearIngresado = Number(document.getElementById('year').value);
    const resultado = document.getElementById('resultado3');
    resultado.innerHTML = '';

    let bisiesto = false;
    if((yearIngresado%100 !==0 && yearIngresado%4===0) || (yearIngresado%400===0)){
        bisiesto = true;
    }

    const p = document.createElement('p');
    p.textContent = `El año ${yearIngresado} ¿es bisiesto? : ${bisiesto}`;
    resultado.appendChild(p);
}

//Suma de Elementos de un Arreglo -----------

function getSum(){
    const arrayIngresado = document.getElementById('arreglo').value.split(',').map(Number);
    const resultado = document.getElementById('resultado4');
    resultado.innerHTML = '';

    const suma = arrayIngresado.reduce((acumulador, valorActual) => acumulador + valorActual, 0); //reduce hace la suma automaticamente
    
    const p = document.createElement('p');
    p.textContent = `La suma de todos los elementos del array es: ${suma}`;
    resultado.appendChild(p);
}
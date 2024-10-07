var readlineSync = require('readline-sync');



//EJERCICIO 1

let nombre = "Antonio"; 
const edad = 25; 
var meGustaProgramar = true; 

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Me gusta programar?:", meGustaProgramar);

//EJERCICIO 2

let a = 5;
let b = 10;
let suma = a+b;

console.log("La suma de los valores de A y B son:", suma);

//EJERCICIO 3

let nombre1 = "Antonio";
let apellido = "Iglesias";

console.log("Mi nombre y apellido es:", nombre1, apellido);

//EJERCICIO 4

let numero = "50";

let numeroConvertido = Number(numero);


console.log("Dato antes de convertir:", typeof numero); 
console.log("Dato despues de convertir:", typeof numeroConvertido);

//EJERCICIO 5

let num1 = 5;
let num2 = 2;

let suma1 = num1+num2;
let resta = num1-num2;
let multiplicacion = num1*num2;
let division = num1%num2;

console.log("El resultado de la suma es:", suma1);
console.log("El resultado de la resta es:", resta);
console.log("El resultado de la multiplicacion es:", multiplicacion);
console.log("El resultado de la division es:", division);

//EJERCICIO 6

let numeroUsuario = readlineSync.question("Elige un numero: ");

numeroUsuario = Number(numeroUsuario);

if (isNaN(numeroUsuario)) {
    console.log("El valor introducido no es un numero valido. Por favor, intentalo de nuevo.");
} else {
    if (numeroUsuario > 10) {
        console.log("El numero que has elegido, " + numeroUsuario + ", es mayor que 10.");
    } else if (numeroUsuario < 10) {
        console.log("El numero que has elegido, " + numeroUsuario + ", es menor que 10.");
    } else if (numeroUsuario === 10) {
        console.log("El numero que has elegido, " + numeroUsuario + ", es igual a 10.");
    }
}

//EJERCICIO 7

let numeroUsuario2 = readlineSync.question("Elige un numero: ");

numeroUsuario2 = Number(numeroUsuario2);

if (isNaN(numeroUsuario2)) {
    console.log("El valor introducido no es un numero valido. Por favor, intentalo de nuevo.");
} else {
    
    if (numeroUsuario2 % 2 === 0) {
        console.log('El numero ' + numeroUsuario2 + ' es par.');
    } else {
        console.log('El numero ' + numeroUsuario2 + ' es impar.');
    }
}

//EJERCICIO 8

for(let i = 1; i < 11; i++){
    console.log(i);
}


//EJERCICIO 9

let numeroUsuario3 = readlineSync.question("Elige un numero: ");

numeroUsuario3 = Number(numeroUsuario3);

if (isNaN(numeroUsuario3) || numeroUsuario3 < 0) {
    console.log("El numero que has introducido no es valido. Por favor, ingrese uno que sea mayor o igual a cero.");
} else {

    var factorial = 1;
    var i = numeroUsuario3;

    while (i > 1) {
        factorial *= i;
        i--;
    }

    console.log("El factorial de " + numeroUsuario3 + " es: " + factorial);
}


//EJERCICIO 10

let numeroUsuario4 = readlineSync.question("Elige un numero: ");

numeroUsuario4 = Number(numeroUsuario4);

if (isNaN(numeroUsuario4)) {
    console.log("El numero que has introducido no es valido. Por favor, intentalo de nuevo.");
} else {
    console.log("Tabla de multiplicar del numero " + numeroUsuario4 + ":");
    for (var i = 1; i <= 10; i++) {
        console.log(numeroUsuario4 + " x " + i + " = " + (numeroUsuario4 * i));
    }
}

//EJERCICIO 11

var cadena = prompt("Introduce una cadena de texto:");

var contadorVocales = 0;

var cadenaMinuscula = cadena.toLowerCase();

for (var i = 0; i < cadenaMinuscula.length; i++) {
    var letra = cadenaMinuscula[i];

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contadorVocales++;
    }
}

console.log("La cadena tiene " + contadorVocales + " vocales.");

//EJERCICIO 12

var nombres = ["Antonio", "Emilio", "Marcos"];

for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//EJERCICIO 13

var numero1 = parseFloat(prompt("Introduce el primer numero:"));

var numero2 = parseFloat(prompt("Introduce el segundo numero:"));

var operador = prompt("Introduce un operador (+, -, *, /):");

var resultado;

if (operador === "+") {
    resultado = numero1 + numero2;
} else if (operador === "-") {
    resultado = numero1 - numero2;
} else if (operador === "*") {
    resultado = numero1 * numero2;
} else if (operador === "/") {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        resultado = "Error: Division por cero.";
    }
} else {
    resultado = "El operador que has introducido no es valido. Por favor, intentalo de nuevo.";
}

console.log("El resultado es: " + resultado);

//EJERCICIO 14

var frase = prompt("Ingresa una frase:");

var palabras = frase.split(" ");

var numPalabras = palabras.length;

console.log("La frase tiene "+ numPalabras + "palabras.");

//EJERCICIO 15

var cadena2 = prompt("Ingresa una frase: ");

var cadenaInvertida = cadena.split("").reverse().join("");

console.log("La cadena invertida es: " + cadenaInvertida);

//EJERCICIO 16

let num3 = parseFloat(prompt("Introduce el primer numero:"));
let num4 = parseFloat(prompt("Introduce el segundo numero:"));
let num5 = parseFloat(prompt("Introduce el tercer numero:"));

if (num3 >= num4 && num1 >= num5) {
    console.log("El numero mayor es: ${num3}");
} else if (num4 >= num3 && num4 >= num5) {
    console.log("El numero mayor es: ${num4}");
} else {
    console.log("El numero mayor es: ${num5}");
}

//EJERCICIO 17

let num = parseInt(prompt("Introduce un numero:"));

function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

if (esPrimo(num)) {
    console.log(`${num} es un numero primo.`);
} else {
    console.log(`${num} no es un numero primo.`);
}







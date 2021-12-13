//Son funciones que no tienen nombre
//Los parentesis del final quiere decir que la funcion se ejecuta sin ser invocada, es decir se autoejecutan, enciando los parametros esperados si es que los tiene.

//ES5
(function (nombre, apellido) {
	console.log('Hola ' + nombre + '' + apellido);
}('Martin'));

//ES6
let persona = (nombre, edad) => `${nombre} tiene ${edad}`;
console.log(persona('Dylan', 41));

let persona1 = ((equipo, colorPreferido) => `La persona es de: ${equipo} y su colos preferido es: ${colorPreferido}`)('Racing', 'rojo');

console.log(persona1);
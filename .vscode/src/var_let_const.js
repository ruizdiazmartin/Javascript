//var, let y const
//Una de las diferencias principales es que con let no puede declarar dos variables con el mismo nombre.
//Mientas que con var si me deja crear dos o mas variables con el mismo nombre.
//Tampoco se permite declarar una variable del tipo var y otra del tipo let con el mismo nombre, ya que da error.

/*
var edad = 55;
var edad = 56;

console.log(edad);
console.log('=============');

//let anio = 58;
let anio = 60;

console.log(anio);*/

/*
console.log('===========');

//Otra de las diferencis es el alcance entre var y let, var abarca a nivel global.
//Mientas que let se limita al bloque donde fue declarada, ejemplo un ciclo de bucle y es mas seguro tambien.
var numeros = [2, 4, 5, 9, 12];

//Funciona tanto dentro como fuera del ciclo for, ya que es mas global al declarl la variable Var, pero es un inconveniente.
for (var i = 0; i < numeros.length; i++) {
	console.log(numeros[i]);
};
console.log(i);

console.log('===========');

//Lanza error porque solo la variable let recide dentro del ciclo for.
for (let z = 0; z < numeros.length; z++) {
	console.log(numeros[z]);
};
console.log(z);*/


console.log('===========');

//Las constantes si o si debemos asignarle un valor y solo se deben declara una vez, no permite repetir nombre de constantes tampoco.
//Una buena practica es declarar las constantes todo con mayuscula para diferenciarlas de las variales o con la primer letra en mayuscula.
const NOMBRE = 'Martin';
//const NOMBRE = 'dylan';

console.log(NOMBRE);

//Tampoco se permite sobreescribir el valor de la constante una vez declarado.
const EDAD = 41;
//EDAD = 14;

console.log(EDAD);

//Si quiero agregar valores a un array por ejemplo debo hacerlo de la siguiente manera.
const VALORES1 = [3, 4, 6, 8, 9];
VALORES1.push(2, 5, 7);

console.log(VALORES1);

//Si quiero agregar valores a un array por ejemplo no debo hacerlo de la siguiente manera.
const VALORES2 = [3, 4, 6, 8, 9];
//VALORES2 = [2, 5, 7];

console.log(VALORES2);





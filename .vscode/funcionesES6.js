//Parametros por defecto en ES5
// function saludo(mensaje, tiempo){
// 	//mensaje = mensaje || "Hola Martin";
// 	mensaje = (typeof mensaje !== "undefined")? mensaje: "Hola Dylan";

// 	setTimeout(function(){
// 		console.log(mensaje);
// 	}, tiempo);
// }

// saludo();

//ES6 parametros opcionales lo declaro cuando recibe el metodo.
// function saludo(mensaje = "Hola Martin Eduardo", tiempo = 1500){

// 	setTimeout(function(){
// 		console.log(mensaje);
// 	}, tiempo);
// }

// saludo();


//ES6 parametros opcionales lo declaro cuando recibe el metodoe, siempre declaro primero los parametros obligatorios.
// function saludo(mensaje, tiempo = 1500){

// 	setTimeout(function(){
// 		console.log(mensaje);
// 	}, tiempo);
// }

// saludo();

//En ES6 los parametros ademas pueden ser variables de distintos tipos o funciones, objetos o arrays tambien.
//En la siguiente funcion recibe por parametro una funcion y lo pongo los parentesis de la misma porque solo ejecuta.
// function saludo(fn = fnTemporal){

// 	//Typeof es para saber el valor que recibe la variable.
// 	//console.log(typeof fn);
// 	if(typeof fn === "undefined"){
// 		console.error("No es una funcion");
// 	}

// 	fn();
// }

// function fnTemporal(){
// 	console.log("Hola funcion temporal");
// }

// saludo();


//En la siguiente funcion recibe por parametro una funcion y un objeto con valor por default igual "Dylan"
//Que se pisa si recibe otro valor.
/*function saludo(fn = fnTemporal, persona = {nombre: "Dylan"}){

	if(typeof fn === "undefined"){
		console.error("No es una funcion");
	}

	fn();
	console.log(persona);
}

function fnTemporal(){
	console.log("Hola funcion temporal");
}

var persona = {
	nombre: "Martin"
}

saludo(fnTemporal, persona);*/

//Los parametros por defecto afectan el objeto argumnets y no funciona como en la siguiente funcion.
/*function suma(a = 1, b=3){
	console.log(arguments);
}

suma();*/


//Parametrtos ES5
// function agregarAlumno(){
// 	console.log(arguments);

// 	for(var i=1; i < arguments.length; i++){
// 		arguments[0].push(arguments[i]);
// 	}
// 	return arguments[i];
// }

// var alumno_arr = ["Martin"];
// var alumno_arr2 = agregarAlumno(alumno_arr, "Dylan", "Eduardo");

//Parametrtos REST ES6
/*function agregarAlumno(alumno_arr, ...alumnos){
	
	console.log(arguments);

	for(let i=0; i < alumnos.length; i++){
		alumno_arr.push(alumnos[i]);
	}
	return alumno_arr;
}

let alumno_arr = ["Martin"];
let alumno_arr2 = agregarAlumno(alumno_arr, "Dylan", "Eduardo");*/


//Restricciones parametros REST.
// 1- Solo puede recibir un parametro REST la funcion.
// 2- El parametro REST siempre debe ir como ultimo parametro
/*function juntar_nombres (apellido, ...nombres ){
}*/

//El operador SPREAD
//Mientras el operador REST permite especificar argumentos independientes que seran combinados en un array.
//El operador SPREAD permite especificar un array que sera sepadaro y cada item enviado sera un argumento independiente a la funcion.

//ES5
// var num1 = 10;
// 	num2 = 30;

// var max = Math.max(num1, num2);
// console.log(max);


//ES6
/*let numeros = [1, 34, 56, 90];

let max = Math.max(...numeros);
console.log(max);*/

//Romper la relacion de referencia de los objetos porque me renombra la propiedad nombre del array persona1
/*let persona1 = {
	nombre: 'Martin',
	apellido: 'Ruiz Diaz'
}

let persona2 = persona1;
persona2.nombre = 'Dylan';

console.log(persona1);
console.log(persona2);*/


//ES6 gracias al operador SPREAD, la relacion del objeto no se rompé.
/*let persona1 = {
	nombre: 'Martin',
	apellido: 'Ruiz Diaz'
}

let persona2 = {...persona1};
persona2.nombre = 'Dylan';

console.log(persona1);
console.log(persona2);*/

//Añadir propiedades a objetos a partir de otros objetos manteniendo los valores de cada objeto,
//agregando todas las propiedades del otro objeto que no tengo.
/*let persona1 = {
	nombre: 'Martin',
	apellido: 'Ruiz Diaz'
}

let persona2 = {
	nombre: 'Eduardo',
	apellido: 'Ruiz Diaz',
	direccion: 'Solis 1628',
	conduce: true,
	vegetariano: false
}

persona1 = {
	...persona2,
	...persona1
}

console.log(persona1);
console.log(persona2)*/

//Diferencia entre SPREAD Y REST.
// REST junta los elementos en un array.
// SPREAD esparse los elementos como si fueran enviados en forma separada.
 /*function saludarRest(saludo, ...nombres){

	for(i in nombres){
		console.log(` ${saludo} ${nombres[i]}`)
	}
}

function saludarSpread(saludo, ...nombres){

	console.log(` ${saludo} ${nombres}.`)

}
saludarRest("Hola", "Martin", "Eduardo", "Dylan");

let personas = ["Carlitos", "Pepito", "Josecito"]
saludarSpread("Que tal!", personas);

//Es otra forma de juntar propiedades de distintos objetos.
let partes = ["Brazos", "Piernas"]
let cuerpo = ["Cabeza", "Cuello", ...partes, "Pies", "Dedos"]

console.log(cuerpo);*/


//Aclarando doble comportamiento de las funciones

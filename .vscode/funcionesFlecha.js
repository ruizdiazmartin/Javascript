//1- No hay creacion de this, super, arguments y new.target.
//2- No tienen cosntructor por lo que no las puedo invocar mediante un new.
//3- No tienen protoType.
//4- No se puede alterar el valor de "THIS".
//5- No hay objeto "Arguments".
//6- No se puede llamar dos parametros iguales.

//Funcion sin parametros en ES5
var suma1 = function(){
	return "Hola Martin";
}

//Funcion sin parametros en ES6
let suma = () => "Hola Dylan";

console.log(suma1(), suma());

//Funcion en ES5 con 1 parametro
var miFuncion_1 = function(valor){
	return valor;
} 

//Funcion flecha en ES6 con 1 parametro
let miFuncion_2 = valor => valor;

console.log(miFuncion_1("Ruiz"), miFuncion_2("Diaz"));

//Funcion con 2 parametros en ES5
var suma1 = function(num1, num2){
	return num1 + num2;
}

//Funcion con 2 parametros en ES6
let suma2 = (val1, val2) => val1 + val2;

console.log(suma1(1,2), suma2(3,4));

//Function en ES5 con varias lineas
var saludarPersona = function(nombre){
	var salida = "Hola " + nombre;
	return salida;
}

//Funcion en ES6 con mas de una linea
let saludarPersona1 = (nombre) => {
	let salida = `Hola ${nombre}`;
	return salida;
}

console.log(saludarPersona("Martin"), saludarPersona1("Martincito"));

//Funcion en ES5 que retorna un objeto
var obtenerLibro = function(id){
	return{
		id: id,
		nombre: "Harry Potter"
	}
}

//Funcion en ES6 que retorna un objeto
let obtenerLibro1 = id => ({id:id, nombre: "Harry"})

console.log(obtenerLibro(2), obtenerLibro1(5));

//Funcion anomina en ES5
var saludo = function(nombre){
	return "Hola " + nombre;
}("Fernando");

//Funcion anomina en ES6
var saludo1 = (nombre => `Hola ${nombre}`)("Dylan");

console.log(saludo, saludo1);

//Ordenando array en ES5
var array = [3, 1, 7, 20];

var ordenadoES5 = array.sort(function(a,b){
 	return a-b;
});

//Ordenando con ES&
let ordenadoES6 = array.sort((a, b) => a-b);

console.log(ordenadoES5, ordenadoES6);

//Identificando funciones de flecha
var restar = (a, b) => a-b;

//Me dice de que tipo es restar
console.log(typeof restar);

//Me dice si restar es una funcion.
console.log(restar instanceof Function);
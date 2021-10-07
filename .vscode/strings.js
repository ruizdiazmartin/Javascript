var saludo = "Hola Martin";

//Esto es en javascript tradicional
console.log(saludo.substr(0,1) === "h");

//Estos metodos se incorporan en ES6
console.log(saludo.startsWith("H"))

console.log(saludo.endsWith("n"))

console.log(saludo.includes("z"))

console.log(saludo.startsWith("Ma",5))

console.log(saludo.endsWith("n"))

console.log(saludo.includes("M", 5))


//Repeticiones de strings

//Repito 5 veces el string "texto"
let texto = "Hola";
console.log(texto.repeat(5));

//Repito 4 veces el string "Martin"
console.log("Martin".repeat(4));

//Concateno strings
const ESPACIOS = 12;

let nombres = ["Martin", "Eduardo", "Dylan"];
let telefonos = ["1233334", "34444444", "5555555"];

for (i in nombres) {

	let dif = ESPACIOS - nombres[i].length;
	console.log(nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);

}


//Templates literals (Lo que esta dentro de las llaves es javascript puro)
let nombre = "Martin";
let apellido = "Ruiz Diaz";

//Se concatena directamente con las variables en el texto
let nombreCompleto = `El nombre completo es ${nombre} ${apellido}`;
console.log(nombreCompleto);

//Tambien se puede concatenar invocando y concatenando el resultado de una funcion.
function obtenerNombre() {
	return "Eduardo Ruiz Diaz";
}

let nombreCompleto1 = `El nombre completo es ${obtenerNombre()}`;
console.log(nombreCompleto1);

//Tambien se puede escribir texto de varias lineas.
let multilinea = `<h1 class="algo">Hola ${nombre}</h1>
<p>${apellido}</p>`;

console.log(multilinea);


//Llamo a una funcion etiqueta y lo concateno al template literals(string)
function etiqueta(literales, ...substitucioines) {

	//console.log(arguments);
	let resultado = "";

	console.log(literales);
	console.log(substitucioines);

	for (let i = 0; i < substitucioines.length; i++) {

		resultado += literales[i];
		resultado += substitucioines[i];
	}
	return resultado;
}

let unidades = 5;
let costo_unitario = 10;

let mensaje = etiqueta`${unidades} lapices cuestan ${unidades * costo_unitario} pesos`;

console.log(mensaje);

//Ejempolo para ver todo el string aun con los caracteres especiales, usamos la funcion: "String.raw"
let mensajes = "Hola \nMundo\\";
let mensaje3 = String.raw`Hola \nMundo\\`;

console.log(mensajes);
console.log(mensaje3);



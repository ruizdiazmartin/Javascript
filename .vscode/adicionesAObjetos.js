//Funcion que retorna tres propiedades ES5
function crearPersonaES5 (nombre, apellido, edad){
	return {
		nombre: nombre,
		apellido: apellido,
		edad: edad
	}
}

//Funcion que retorna tres propiedades ES5
function crearPersonaES6 (nombre, apellido, edad){
	return {
		nombre,
		apellido,
		edad
	}
}

var persona1 = crearPersonaES5("Martin", "Ruiz Diaz", 41);
var persona2 = crearPersonaES5("Dylan", "Ruiz Diaz", 40);
console.log(persona1, persona2);

//Nombres de propiedades computadas o procesadas.
var apellido = "Ruiz Diaz";

var persona = {
	"primer nombre": "Martin",
	[apellido]: "Primer apellido"
}

console.log(persona["primer nombre"]);
console.log(persona[apellido]);

var nombrePersona = " nombre";

var persona = {
	["Primer" + nombrePersona]: "Eduardo",
	["Segundo" + nombrePersona]: "Dylan"
};

console.log(persona["Primer nombre"]);
console.log(persona["Segundo" + nombrePersona]);

//Nuevo metodo Object.is();
//Sirve para asegurarnos mas al comparar.
console.log( +0 == -0);
console.log( +0 === -0);
console.log(Object.is(+0, -0));

console.log("====");

console.log( NaN == NaN);
console.log( NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log("====");

//Con == compara si es el mismo valor, y con === compara si es el mismo valor y tipo.
console.log( 5 == 5);
console.log( 5 === "5");

console.log("==== 5 contra 5 ====")

console.log(Object.is(5, 5));
console.log(Object.is(5, "5"));
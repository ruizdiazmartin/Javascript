//Simbolos y propiedades

//Los simbolos son siempre diferentes.
let primerNombre = Symbol("Martin");
let segundoNombre = Symbol();

let persona = {
	[segundoNombre] : "Eduardo"
};

persona[primerNombre] = "Dylan";

console.log(persona[primerNombre], persona[segundoNombre]);

//Si imprimomos lo siguiente nos va a dar false, porque con Simbol nada es igual mas alla que nos parezca que si.
let simbolo1 = Symbol("igual");
let simbolo2 = Symbol("igual");

console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log(Object.is(simbolo1, simbolo2));

//Si no sabemos de que tipo es lo que estoy imprimiendo, realizamos lo siguiente
console.log(typeof simbolo1,  typeof simbolo2);

//No se convertir simbolo a string como vemos en de ejemplo en la siguiente linea.
//console.log("No se puede comvertir simbolo a string" + simbolo2);


//Compartiendo simbolos: Symbol.for() y Symbol.Keyfor();
//Symbol.for(); es para saber si el simbolo no esta siendo usado en otro archivo.
let userId1 = Symbol.for("userId");
let userId2 = Symbol.for("userId");

console.log(userId1 == userId2);
console.log(userId1 === userId2);
console.log(Object.is(userId1, userId2));

//Aca vemos como podemos recuperar el valor de un id de tipo string, mediante el metodo Symbol.Keyfor()
let idString = Symbol.for("Id unico");
console.log(Symbol.keyFor(idString));

//Aca vemos como podemos recuperar el valor de un id de tipo int, mediante el metodo Symbol.Keyfor()
let idInt = Symbol.for(1);
console.log(Symbol.keyFor(idInt));

//Cuando imprimo la siguiente variable, el resultado es undefined 
//porque recien creo el simbolo y no lo cree mediante el metodo Symbol.for como en los anteriores ejemplos.
let idSymbol = Symbol("acceso");
console.log(Symbol.keyFor(idSymbol));

//Recuperando las propiedades de un objeto aun creando propiedades del tipo simbolo.
let id = Symbol.for("id");
let activo = Symbol.for("activo");

let person = {
	[id]: 1234,
	[activo]: true,
	nombre: "Martin",
	apellido: "Ruiz Diaz",
	email: "ruizdiaz@gmail.com"
};

for(key in person){
	console.log(key, person[key]);
}

//Con la Object.getOwnPropertySymbols() podemos obtener las propiedades de tipo simbolo de un objeto.
let simbolos = Object.getOwnPropertySymbols(person);
console.log(simbolos);

for(i in simbolos){
	console.log(simbolos[i], Symbol.keyFor(simbolos[i]));
}


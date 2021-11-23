//Funcion que retorna tres propiedades ES5
function crearPersonaES5(nombre, apellido, edad) {
	return {
		nombre: nombre,
		apellido: apellido,
		edad: edad
	}
}

//Funcion que retorna tres propiedades ES5
function crearPersonaES6(nombre, apellido, edad) {
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
//Sirve para asegurarnos mas al comparar, es mas restrictivo.
//En difinita el Object.is es igual a === salvo en los casos que se compara (+0 con -0 o NaN, NaN)
//Object.is() se usa especialemente para comprar (+0 con -0 o NaN, NaN) ya que nos da un resultado distinto que si lo hacemos con ===

console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0, -0));

console.log("====");

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log("====");

//Con == compara si es el mismo valor, y con === compara si es el mismo valor y tipo.
console.log(5 == 5);
console.log(5 === "5");

console.log("==== 5 contra 5 ====")

console.log(Object.is(5, 5));
console.log(Object.is(5, "5"));

//Nuevo metodo Object.assing(); 
//Nos sirve para setear las propiedades de un objeto a otro.
var objectReceptor = {};
var objectDonador = {
	//nombre: "Mi archivo.js"
	get nombre() {
		return "Mi nuevo archivo.js"
	}
};

console.log(Object.assign(objectReceptor, objectDonador));


//Orden de enumeracion de las propiedades de un objeto.
var obj = {
	c: 1,
	0: 1,
	x: 1,
	15: 1,
	r: 3,
	3: 1,
	b: 1
};

//le agrego valores al objeto en tiempo de ejecucion y me los ordena tambien.
obj.d = 1;
obj["1"] = 1;
obj["a"] = 1;

console.log(Object.getOwnPropertyNames(obj).join(", "));
console.log(Object.keys(obj));
console.log(JSON.stringify(obj));

for (i in Object.keys(obj)) {
	console.log(Object.keys(obj)[i]);
};
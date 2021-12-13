//Introduccion a las clases.
//Declaracion basica de clase en ES6.
//Es recomendable asignar nombre de la clase con la primer letra en mayuscula.
class Persona {
	constructor(nombre) {
		this.nombre = nombre;
	}
	decirNombre() {
		console.log(this.nombre);
	}
};

//Creo una instacncia de la clase Persona.
let nombrePersona = new Persona("Martin");

//Invoco la funcion de la clase Persona.
nombrePersona.decirNombre();

//Pregunto si la instancia que cree es del tipo Object y del tipo clase Persona.
//Retorna true porque es de ambos tipos.
console.log(nombrePersona instanceof Persona);
console.log(nombrePersona instanceof Object);

//El tipo deberia retornar que es de tipo clase no del tipo funcion como la hace.
console.log(typeof Persona);


//Clases como expresiones: Es otra manera de crear una clase. 
let People = class {
	constructor() {
		this.nombre = "Martin";
		this.apellido = "Ruiz Diaz"
	}
};

let namePeople = new People();

console.log(typeof namePeople);
console.log(namePeople instanceof People);


//Clases como parametros.
let creadorClase = (reciboClase) => {
	return new reciboClase();
};

let obj = creadorClase(class {
	constructor() {
		this.nombre = undefined;
		this.edad = 30;
	}
	saludar() {
		console.log("Hola");
	}
});

obj.saludar();


//Creo una clase y realizo una validacion para saber si lo que espero es lo recibido como parametro
class Cuadrado {
	constructor(lado) {
		this.lado = lado;
	}
	getArea() {
		return this.lado * this.lado;
	}
};

let imprimirLado = (cuadrado) => {
	if (!(cuadrado instanceof Cuadrado)) {
		console.error("No es un cuadrado");
		return;
	}
	console.log(cuadrado.getArea());
};

let mesa = new Cuadrado(5);
imprimirLado(mesa);

//Miembros estaticos y metodos computados.
//Los metodos estaticos nos permiten no instanciar la clase cuando la invocamos
//Los metodos computados son metodos cuyos metodos se pueden definir a travez de una variable.

//Creo varibale de metodo computado
let metodoComputado = "cambiarNombre";

class TipoPersona {
	constructor(nombre) {
		this.nombre = nombre;
	}
	GetNombre() {
		console.log(this.nombre);
	}
	static crearNombre(nombre) {
		return new TipoPersona(nombre);
	}
	//Creo metodo computado a travez de la variable creada anteriormente fuera de la clase.
	[metodoComputado]() {
		console.log(this.nombre.toUpperCase());
	}
};

//Al invocar un metodo estatico de una clase no es necesario instanciar el tipo
let NuevaPersonaEstatica = TipoPersona.crearNombre("Martin");
console.log(NuevaPersonaEstatica);

//Al invocar un metodo no estatico de una clase es necesario instanciar el tipo con el new.
let NuevaPersona = new TipoPersona("MARTIN");
console.log(NuevaPersona);

//Invoco metodo computado.
//NuevaPersona.metodoComputado();


//Herencia de clases.
class Rectangulo {
	constructor(alto, largo) {
		//inicializo las propiedades.
		this.alto = alto;
		this.largo = largo;
	}
	getArea() {
		return this.alto * this.largo;
	}
};

let rectacgulo = new Rectangulo(10, 15);
console.log(rectacgulo.getArea());

//Heredo de la clase Rectangulo
class Cuadrados extends Rectangulo {
	constructor(alto) {

		//Al invocar el metodo supper herede el constructor del padre.
		super(alto, alto);
	}
};

let cuadrados = new Cuadrados(5);
console.log(cuadrados.getArea());

//Verificamos de que instancia es la clase que creo y que heredo.
//En el siguiente ejemplo la clase Cuadrados herede de la clase Rectangulo.
console.log(cuadrados instanceof Cuadrados);
console.log(cuadrados instanceof Rectangulo);

//test branch
let gato = {
	sonido(){
		console.log("miau!");
	},
	chillido(){
		console.log("MIAU!!!");
	}
}
let perro = {
	sonido(){
		console.log("guau!");
	}
};

let angora = Object.create(gato);
console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.chillido();

//Esta funcion que recibe dos parametros
//El primero parametro es el objeto que quiero setear.
//El segundo parametro es el objeto que quien voy a tomar el valor a modificar
Object.getPrototypeOf(angora, perro);

console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.sonido();

//Acceso al prototipo con la referencia SUPER
let persona = {
	saludar(){
		return "Hola";
	}
};

let amigo = {
	saludar(){
		//Con supper llamo a un metodo de un objeto que quiero heredar.
		return super.saludar() + ", saludos!!!";
		
	}
};

Object.setPrototypeOf(amigo, persona);
console.log(amigo.saludar());

//Destructuracion de Objetos
let tipoPersona = {
	nombre: "Martin",
	email: "ruizdiazmartin@gmail.com",
	facebook: "facemartin@gmail.com",
	google: "googlemartin.com.ar",
	premium: true
};

//Aca destructuro el objeto y tomo las propiedades que necesito, ademas renombro las propiedades que deseo.
//Tambien se puede destructurar desordenamente
//Tambien se puede crear e inicializar variables en la destructuracion.
let {nombre: renombre, email, facebook, google, premium: renombroPtemium, twitter = "twittermartin"} = tipoPersona;

console.log(renombre, renombroPtemium, twitter);


//Destructuracion de objetos anidados.
let autoguardado = {
	archivo: "app.js",
	cursor: {
		linea: 7,
		columna: 16
	},
	ultimoArchivo: {
		archivo: "index.html",
		cursor: {
			linea: 8,
			columna: 20
		}
	},
	otroNodo:{
		subNodo:{
			cursor:{
				linea: 11,
				columna: 12
			}
		}
	}
};

let {cursor} = autoguardado;
console.log(cursor);

//Accedo a las propiedades que deseo en el nodo que necesito.
let {ultimoArchivo: {cursor: ultimoArchivo, archivo}} = autoguardado;
console.log(archivo, ultimoArchivo);

//Acceso al nodo que deseo y lo renombro.
let {otroNodo:{subNodo: {cursor: otroSupernodo}} } = autoguardado;
console.log(otroSupernodo);

//Una manera mas facil de acceder al nodo que deseo.
let otroSupernodo2 = autoguardado.otroNodo.subNodo.cursor;
console.log(otroSupernodo2);

//Destructuracion de arrays
let frutas  = ["Banana", "Pera", "Uva"];

//Imprime "Banana" por que es la primer posicion
let [fruta1] = frutas;
console.log(fruta1);

//Imprime "Pera" por que es la segunda posicion y la primer posicion la deje vacia.
let [,fruta2] = frutas;
console.log(fruta2);

//Imprime "Uva" por es la tercer poscion y las dos primeras las deje vacias
let [,,fruta3] = frutas;
console.log(fruta3);

//Cambios de valores de dos arrays.
let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a,b);

//Destructuracion de arrays anidados.
let colores = ["rojo", "amarillo", ["verde", "azul"], "negro"];

let [color1, color2, [color3]] = colores;

console.log(color1, color2, color3);

//Tomar solo un elemento del array y los demas elementos van a otro array.
let coloresEquipo = ["rojo", "amarillo", ["verde", "azul"], "negro"];

//Con el operador ...(rest) corto las demas posiciones.
let [colorPrincipal, colorSecundario, ...demasColores] = coloresEquipo;

console.log(colorPrincipal, colorSecundario, demasColores);


//Valores por defecto en la destructuracion de los arrays.
let fruta = ["banana"];

//El segundo parametro la seteo un valor por defecto ya que en el array solo tengo una posicion.
let [frura_1, frura_2 = "pera"] = fruta;
console.log(frura_1, frura_2);


//Valores por defecto en la destructuracion de los objetos.
let opciones = {
	nombre: "Martin"
};

//El segundo parametro la seteo un valor por defecto ya que en el objeto solo tengo el nombre.
let {nombre, apellido = "Ruiz Diaz"} = opciones;
console.log(nombre, apellido);


//Destructuracion de parametros por defecto si la funcion no recibe el sugundo parametro como objeto.
function crearJugador(nickName, {hp, sp, clase} = {hp:100, sp:50, clase: "Mago"}){
	console.log(nickName, hp, sp, clase);
};
//Como no le envie el segundo parametro de objeto lo destructuro en la funcion crearJugador() cuando lo recibe
crearJugador("Dylan");

let jugador = {
	hp: 7,
	sp: 10,
	clase: "Harry"
};
//Como le estoy encviando los dos paremetros, pisa el parametro por defecto al recirla la funcion.
crearJugador("Eduardo", jugador);



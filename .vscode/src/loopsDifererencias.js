let nombres = ['Martin', 'Eduardo', 'Dylan', 'pepe'];
nombres.edad = 10;

//Ciclo for
//ventaja: se puede usar break y continuo en la iteracion
for (let i = 0; i < nombres.length; i++) {

	if (nombres[i] === 'Dylan')
		break;
	else
		console.log(nombres[i]);
	continue;
};

console.log('============');

//Ciclo foreach
//Vantaja: Es mucho mas legible que en ciclo for y lo puede realizar en una linea.
//Desventaja: No permite usar Break y Continuo como en el ciclo For.
nombres.forEach(nombre => console.log(nombre));

console.log('============');


//Ciclo for in
//Ventaja: la sintaxis es limpia y sirve para iterar cuando necesitas el index.
//Ventaja: Nos permite agregar elementos al array en tiempo de ejecucion.
let nombresPersonas = ['Martin', 'Eduardo', 'Dylan', 'pepe'];
nombresPersonas.edad = 10;

for (const index in nombresPersonas) {
	console.log(nombresPersonas[index]);
};

console.log('============');

//Ciclo for Of
//ventajas: Se puede usar el break y continuo como en el coclo for.
//Ventajas: Es el unico loop que puedo iterar maps y sets de distintos tipos como objetos y propiedades, los demas loops son para iterar arrays.
for (const nombre of nombres) {
	console.log(nombre);
};

//Podemos recorrer un Set de propiedades tambien con el ciclo for of.
let peopleSet = new Set();

peopleSet.add("pepe");
peopleSet.add("papu");
peopleSet.add("pipo");

for (let per of peopleSet) {
	console.log(per);
};

//Podemos recorrer un Set de objeto tambien con el ciclo for of.
let peopleSets = new Set();

peopleSets.add({ nombre: "Martin", edad: "21" });
peopleSets.add({ nombre: "Edu", edad: "11" });
peopleSets.add({ nombre: "Dylan", edad: "31" });

for (let pe of peopleSets) {
	console.log(pe.nombre, pe.edad);
};

//Podemos recorrer un Map de objeto tambien con el ciclo for of.
let peopleMap = new Map([["nombre", "Carlitos"], ["edad", 12]]);

for (let peMap of peopleMap) {
	console.log(peMap);
};
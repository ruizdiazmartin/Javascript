
/*let simbolo1 = Symbol('MARTIN');
let simbolo2 = Symbol('MARTIN');

let nombre1 = 'MARTIN';
let nombre2 = 'MARTIN';

let numero1 = '1';
let numero2 = 1;

if (nombre1 == nombre2) {
	console.log('Son iguales');
};

if (nombre1 === nombre2) {
	console.log('Son iguales tambien');
};

if (Object.is(nombre1, nombre2)) {
	console.log('Son realmente iguales');
};

console.log(Object.is(simbolo1, simbolo2));

console.log('=========');

console.log(Number == NaN);
console.log(NaN === Number.NaN);
console.log(Object.is(Number.NaN, NaN));

console.log('=========');

console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0, -0));*/

console.log('===========');

//Podemos recorrer un Set de propiedades tambien con el ciclo for of.
let peopleSet = new Set();

peopleSet.add("pepe");
peopleSet.add("papu");
peopleSet.add("pipo");

for (let per of peopleSet) {
	console.log(per);
};

console.log('===========');

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

console.log('===========');

for (let i in peopleMap) {
	console.log(peopleMap[i]);
}